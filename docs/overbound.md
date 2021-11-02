---
sidebar_label: '暫定解の更新'
sidebar_position: 2
---

# 暫定解の更新

逐次LMI化法は拡大LMIを用いて最適化問題を繰り返し解くことで，
元のBMI制約問題の近似解を得る方法である．

ここでは$H_\infty$制御問題を例に，暫定解を繰り返し更新する方法について解説する．

$H_\infty$制御問題については[静的出力フィードバックによるH∞制御](sample/sample)を参照されたい．

## 説明

まず，決定変数の定義及びBMI制約の記述を行う．なお，係数行列や次元数は宣言を省略している．
```matlab
p = sdpvar(na,na,'symmetric');	% Lyapunov 行列
k = sdpvar(nu,ny,'full');		% 制御器(定数ゲイン)
g = sdpvar(1,1);			    % H∞ノルム
```
```c
Fstr = "[p*(a+b2*k*c2)+(p*(a+b2*k*c2))' p*(b1+b2*k*d21) (c1+d12*k*c2)';"   +...
        "(p*(b1+b2*k*d21))'             -g*eye(nw)      (d11+d12*k*d21)';" +...
        "c1+d12*k*c2                    d11+d12*k*d21   -g*eye(nz)]";
```

次に暫定解を決定変数`sdpvar`として宣言する．
`sdpvar`のsizeやtypeは，それぞれの暫定解`p0` `k0`に対応する決定変数`p` `k`と同一のものにする必要がある．
```matlab
p0 = sdpvar(na,na,'symmetric');
k0 = sdpvar(nu,ny,'full');
```

`linearizebmi`を用いることで，BMIの行列変数を拡大LMIの行列変数に変換することができる．
変換後，制約として宣言する．
```matlab
LMI = linearizebmi(Fstr,{'p','k'},{'p0','k0'}); 
constraints = [LMI <= 0]; 
```

逐次LMI化法を利用するためには，初期暫定解が与えられている必要がある．
ここでは初期暫定解をランダムな定数行列として定義しているが，
本来では元のBMI制約を満たすような解を求めておく必要がある．
```matlab
p0init = rand(size(p));
k0init = rand(size(k));
```

最後に，拡大LMIの最適化問題を解くこと，暫定解を更新することを繰り返し行うことで，元のBMI制約問題（$H_\infty$制御問題）の近似解を得ることができる．
```matlab
% 繰り返し最適化
lcmax = 200; % 反復回数
for lc=1:lcmax
  % 暫定化を決定変数から定数に置き換える
  extLMI = constraints;
  extLMI = replace(extLMI,p0,p0init);
  extLMI = replace(extLMI,k0,k0init);

  % gについて最適化
  optimize(extLMI,g)

  % 暫定解を更新
  p0init = double(p);
  k0init = double(k);
end
```

:::info
`replace`は制約内の決定変数を他の値に置き換える関数である．

暫定解`p0` `k0`をあらかじめ決定変数として定義しておくことで，
ループの各ステップで更新された暫定解`p0init` `k0init`を制約内の暫定解`p0` `k0`に代入し，制約を更新することができる．

:::