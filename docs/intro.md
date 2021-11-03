---
sidebar_label: 'linearizebmiとは'
sidebar_position: 1
---

# linearizebmiとは

**linearizebmi[^1]**は，**MATLAB**及び[**YALMIP**](https://github.com/yalmip/YALMIP)ユーザを対象に開発された，
[**逐次LMI化法**](linearizebmi)のための支援プログラムである．

linearizebmiは，**BMI制約**を**LMI制約**に自動で変換する機能を提供し，ユーザはBMI制約を記述するのみで，その他の付加情報なしにLMI制約への変換が可能である．

linearizebmiは以下の特徴を持つ：
- **YALMIP**の利用を前提とした実行環境
- ユーザに**必要最小限の情報**のみ求める（例：BMI制約の文字列）
- 文字列を利用した**デバッグ**が容易

linearizebmiを利用することで，**開発時間の短縮**，**式展開のミスやプログラムミスの防止**が期待できる．


[^1]: 朱九霖，瀬部昇，逐次LMI化法のCAD実装，第40回計測自動制御学会九州支部学術講演会，2021.