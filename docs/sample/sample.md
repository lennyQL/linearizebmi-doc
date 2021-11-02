---
sidebar_label: "静的出力フィードバックによるH∞制御"
sidebar_position: 1
---

# 静的出力フィードバックによる H∞ 制御

次の一般化制御対象について考える．
$$
\dot{x} = Ax + B_{1}w + B_{2}u, \\
z = C_{1}x + D_{11}w + D_{12}u, \\
y = C_{2}x + D_{21}w
$$
ただし，
$x \in \mathbb{R}^{n}$，
$w \in \mathbb{R}^{m_1}$，
$u \in \mathbb{R}^{m_2}$，
$z \in \mathbb{R}^{p_1}$，
$y \in \mathbb{R}^{p_2}$である．

フィードバックゲインを$K \in \mathbb{R}^{m_2 \times p_2}$とすると，
静的出力フィードバック制御則は
$$
u=Ky
$$
と表される．

このとき，静的出力フィードバックによる$H_{\infty}$制御の制約条件は以下で与えられる．
$$
\left[
\begin{matrix}
\mathrm{He}\{P(A+B_{2}KC_{2})\} &
* &
* \\
(B_{1}+B_{2}KD_{21})^{T}P &
-I &
* \\
C_{1}+D_{12}KC_{2} &
D_{11}+D_{12}KD_{21} &
-I 
\end{matrix}
\right]
\prec O
$$
ここで，$P \in \mathbb{R}^{n \times n}$は正定値対称行列であり，
この制約条件は決定変数$P, K$についてのBMI制約である．
また，$*$は対称行列の対象部分を省略する記号である．

このBMI制約を記述するサンプルコードを以下に示す．
```c
% 係数行列，次元数，暫定解の定義（省略）

% 決定変数
P = sdpvar(n,n);
K = sdpvar(m2,p2,'full');

% 行列変数の文字列
Fstr = "[P*(A+B2*K*C2)+(A+B2*K*C2)'*P'  P*(B1+B2*K*D21)     (C1+D12*K*C2)';"+...
        "(B1+B2*K*D21)'*P'               -eye(p1)           (D11+D12*K*D21)';"+...
        "C1+D12*K*C2                     D11+D12*K*D21       -eye(p1)]";

% 拡大LMIに変換
LMI = linearizebmi(Fstr,{'P','K'},{'P0','K0'});
constraints = [LMI <= 0];
```
