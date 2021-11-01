---
sidebar_label: 'linearizebmiとは'
sidebar_position: 1
---

# linearizebmiとは

linearizebmiは，MATLAB及びYALMIPユーザを対象に開発された，
逐次LMI化法のための支援プログラムである．

逐次LMI化法は，BMI制約をLMI制約に近似し，繰り返しLMI最適化問題を解くことで元のBMI最適化問題の近似解を得る方法であり，様々なBMI問題に適用できる．

一方で，設計問題ごとに設計者が逐次LMI化法を実装する必要があり，開発時間や信頼性が問題として挙げられる．

linearizebmiは，BMI制約をLMI制約に自動で変換する機能を提供し，ユーザはBMI制約を記述するのみで，その他の付加情報なしにLMI制約への変換が可能である．