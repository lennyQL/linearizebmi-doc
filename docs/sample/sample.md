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
-\gamma I &
* \\
C_{1}+D_{12}KC_{2} &
D_{11}+D_{12}KD_{21} &
-\gamma I 
\end{matrix}
\right]
\prec O
\tag{1}
$$
ここで，$P \in \mathbb{R}^{n \times n}$はLyapunov行列であり，正定値対称行列である．
この制約条件は決定変数$P, K$についてのBMI制約である．
また，$*$は対称行列の対象部分を省略する記号である．

$\gamma \in \mathbb{R}$は$H_\infty$ノルムであり，
制約条件$(1)$のもと，$\gamma$を最小化する最適化問題が**$H_\infty$制御問題**である．

このBMI制約を記述するサンプルコードを以下に示す．
```c
% 係数行列，次元数，暫定解の定義（省略）

% 決定変数
P = sdpvar(n,n);          % Lyapunov 行列
K = sdpvar(m2,p2,'full'); % 制御器(定数ゲイン)
g = sdpvar(1,1);          % H∞ノルム

% 行列変数の文字列
Fstr = "[P*(A+B2*K*C2)+(A+B2*K*C2)'*P'  P*(B1+B2*K*D21)     (C1+D12*K*C2)';"+...
        "(B1+B2*K*D21)'*P'              -g*eye(p1)          (D11+D12*K*D21)';"+...
        "C1+D12*K*C2                     D11+D12*K*D21      -g*eye(p1)]";

% 拡大LMIに変換
LMI = linearizebmi(Fstr,{'P','K'},{'P0','K0'});
constraints = [LMI <= 0];
```
