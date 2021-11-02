---
sidebar_label: 'linearizebmi'
sidebar_position: 1
---

# linearizebmi

## 構文
```c
LMI = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'})
LMI = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'},'G')
[LMI, LMIstr] = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'},'G')
```


## 説明
`linearizebmi`は，BMIの行列変数を文字列として受け取り，拡大LMIの行列変数を返す関数である．

引数：

|変数|データ型|説明|
|-|-|-|
|`Fstr` |string|BMIの行列変数 |
|`{'X','Y'}` |string in cell|決定変数 |
|`{'X0','Y0'}` |string in cell|暫定解 |
|`'G'` |string |分割行列（デフォルトで単位行列） |

戻り値：

|変数|データ型|説明|
|-|-|-|
|`LMI` |sdpvar|拡大LMIの行列変数 |
|`Lstr` |string|拡大LMIの文字列 |



## 例
BMI制約
$
P(A+BKC)+(A+BKC)^\mathrm{T}P
\prec O
$
の記述について考える．

### 定義
まず，係数行列$A,B,C$の定義を行う．
```matlab
n = 4;
m = 2;
A = rand(n,n);
B = rand(n,m);
C = rand(m,n);
```

次に，決定変数$P,K$とそれぞれの暫定解，拡大LMIのための分割行列を定義する．
```matlab
% 決定変数
P = sdpvar(n,n);
K = sdpvar(m,m);
% 暫定解
P0 = rand(n,n);
K0 = rand(m,m);
% 分割行列
G = eye(m,m);
```
:::caution
逐次LMI化法は**すでに与えられている初期暫定解**の値をさらに**改善**する手法である．

ここでは暫定解をランダムな定数行列としているが，本来では元のBMI制約を満たすような初期暫定解を**あらかじめに求めておく**必要がある.
:::

:::info
暫定解を用いて繰り返し値を更新したい場合，暫定解を**決定変数**`sdpvar`として定義することもできる．

詳しくは[**暫定解の更新**](overbound)を参照されたい．
:::

### BMIの記述
最後にBMIの行列変数
$
P(A+BKC)+(A+BKC)^\mathrm{T}P
$
に対応する文字列を記述する．
```c
Fstr = "P*(A+B*K*C)+(A+B*K*C)'*P";
```

以上定義した変数名を利用し，`linearizebmi`を用いてBMIを拡大LMIに変換する．
```matlab
% 行列変数
[LMI,Lstr] = linearizebmi(Fstr,{'P','K'},{'P0','K0'},'G');
% 制約
constraints = [LMI <= 0];
```
:::info
引数`'G'`はデフォルトで**単位行列**として`linearizebmi`内で定義されており，引数の省略が可能である．
:::

:::caution
`linearizebmi`は制約における**行列変数の変換のみ**を行うため，`linearizebmi`の戻り値を利用して制約を記述する必要がある．
:::

### 出力
出力は以下の通りとなる．
```no title="LMI"
Linear matrix variable 6x6 (symmetric, real, 13 variables)
Coeffiecient range: 0.043024 to 3.4622
```
```no title="constraints"
++++++++++++++++++++++++++++++++++++++++++++++++++++++
|   ID|              Constraint|    Coefficient range|
++++++++++++++++++++++++++++++++++++++++++++++++++++++
|   #1|   Matrix inequality 6x6|   0.043024 to 3.4622|
++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
```no title="Lstr"
拡大LMIの文字列: He( LMI )
LMI:
    "(P-P0)*A+comp*C"    "(P-P0)*B"
    "G*(K-K0)*C"         "-G"      
comp:
    "P0*B*K0+(P-P0)*B*K0+P0*B*(K-K0)"
```
<!-- 変換後の拡大LMIの行列変数は
$$
\mathrm{He}
\left\{
\left[
\begin{matrix}
\Delta{P}A+WC & \Delta{P}B  \\
G\Delta{K}C & -G 
\end{matrix}
\right]
\right\}
\\
W = \hat{P}B\hat{K}
$$ -->