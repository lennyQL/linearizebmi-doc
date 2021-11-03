---
sidebar_label: '逐次LMI化法'
sidebar_position: 2
---

# 逐次LMI化法

**双線形行列不等式(BMI)制約問題**は制御系設計問題において重要な問題である．一方で，BMI制約問題は数値的な求解が困難であることが知られている．

**逐次LMI化法(Overbounding Approximation Method)[^1]**はBMI制約問題を解く手法の一つであり，
BMI制約を**線形行列不等式(LMI)制約**に近似し，繰り返しLMI制約問題を解くことで元のBMI制約問題の近似解を得る方法である．

逐次LMI化法は以下の特徴を持つ：
- **BMIの一般形（後述）**で記述できる設計問題であれば，**どんな問題**にも適用できる．
- 近似されたLMI制約の最適化問題を繰り返し解くことで，**目的関数値は単調に減少**し，暫定解を改善できる．
- **初期暫定解**が与えられている必要がある．

## 概要

BMI制約の一般形として以下の式を考える．
$$
\mathrm{He}\{Q_{0}+LXNYR\} 
\prec O
\tag{1}
$$
ただし，$X, Y$は決定変数，$L, N, R$は定数行列，$Q_0$は定数項と決定変数の線形項である．
$(1)$は決定変数同士の積である双線形項とその他の項との和として表現されている．

ここで，$(1)$を満たす暫定解$(\hat{X},\hat{Y})$が与えられているとする．
これを用いて
$$
X = \hat{X} + \Delta X,~
Y = \hat{Y} + \Delta Y
\tag{2}
$$
と置き換え，決定変数$X, Y$の代わりに$\Delta X, \Delta Y$を決定変数とする．

$(2)$を$(1)$に代入することで，BMI制約は
$$
\mathrm{He}\{Q+L \Delta X N \Delta Y R\} 
\prec O \tag{3}, \\
Q = Q_0 + L(\hat{X}N\hat{Y} + \Delta{X}N\hat{Y} + \hat{X}N\Delta{Y})R
$$
と書き換えることができる．

このとき，BMI制約$(3)$の十分条件は
$$
\mathrm{He}
\left\{
\left[
\begin{matrix}
Q & L\Delta{X}N \\
G\Delta{Y}R & -G
\end{matrix}
\right]
\right\} 
\prec O
\tag{4}
$$
で与えられ，これは$\Delta X, \Delta Y$についてのLMI制約である．
ただし，$G$は
$
\mathrm{He}\{G\}  \succ O
$
を満たす任意の定数行列であり，分割行列と呼ばれる．

$(4)$は，元のBMI制約である$(1)$と比べて次元が拡大しており，**拡大LMI**と呼ばれる．

**元の解きたい問題$(1)$の代わりに，十分条件である$(4)$を用いて最適化問題を繰り返し解き，$(1)$の近似解を得る方法が逐次LMI化法である．**


[^1]: N. Sebe, Sequential Convex Overbounding Approximation Method for Bilinear Matrix Inequality Problems, Proceedings of IFAC symposium on
Robust Control Design, pp. 175-182, 2018.