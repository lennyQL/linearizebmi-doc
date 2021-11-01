---
sidebar_label: 'インストール'
sidebar_position: 2
---

# インストール

## 入手
linearizebmiをダウンロードする方法は以下の2通りである．

1. 以下のリンクから最新のzip(tar.gz)ファイルをダウンロード：
https://github.com/lennyQL/linearizebmi/releases <br/>
zip(tar.gz)ファイルを入手後，ファイルを解凍する．

2. gitを利用して以下のコマンドからリポジトリを入手：
```
git clone https://github.com/lennyQL/linearizebmi.git
```


## PATH
linearizebmiのファイルを入手後，
ファイル内のディレクトリ全てをMATLABのPATHに追加する必要がある．
linearizebmiのファイルがある階層で，以下のコマンドを実行することでPATHを追加できる．
```
addpath(genpath([pwd filesep 'linearizebmi']));
savepath
```

## YALMIP
linearizebmiを利用するためには，YALMIPをインストールしている必要がある．

YALMIPの利用方法及びインストール方法は以下のリンクより参照できる．
https://yalmip.github.io
