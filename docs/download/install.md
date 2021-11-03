---
sidebar_label: 'インストール'
sidebar_position: 2
---

# インストール

## 入手
<!-- linearizebmiをダウンロードする方法は以下の2通りである．

1. 以下のリンクから最新のzip(tar.gz)ファイルをダウンロード：<br/>
https://github.com/lennyQL/linearizebmi/releases <br/>
zip(tar.gz)ファイルを入手後，ファイルを解凍する．

2. gitを利用して以下のコマンドからリポジトリを入手：
```bash
git clone https://github.com/lennyQL/linearizebmi.git
``` -->

以下のリンクから最新のzipファイルをダウンロード：<br/>
http://www.donald.ai.kyutech.ac.jp/~sebe/linearizebmi/linearizebmi-main.zip

zipファイルを入手後，以下のコマンドでファイルを解凍する．
```matlab
unzip('linearizebmi-main.zip','linearizebmi')
```


## PATH
linearizebmiのファイルを入手後，
ファイル内のディレクトリ全てをMATLABのPATHに追加する必要がある．

linearizebmiのファイルがある階層で，以下のコマンドを実行することでPATHを追加できる．
```matlab
addpath(genpath([pwd filesep 'linearizebmi']));
```
さらに永続的にPATH設定を保存する場合は以下のコマンドを実行する．
```matlab
savepath
```

## YALMIP
linearizebmiは，**YALMIP[^1][^2][^3]**の利用を前提としている．

YALMIPの利用方法及びインストール方法は以下のリンクより参照できる．<br/>
https://yalmip.github.io

## ライセンス
linearizebmiは，**MIT License**のもと，オープンソースとして公開している．

```title="MIT License"
MIT License

Copyright (c) 2021 Kyurin Shu, Noboru Sebe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



[^1]: J. Löfberg, YALMIP : A Toolbox for Modeling and Optimization in MATLAB, In Proceedings of the CACSD Conference, 2004.
[^2]: J. Löfberg, Automatic robust convex programming, Optimization methods and software, 27-1, pp. 115-129, 2012.
[^3]: J. Löfberg, Pre- and post-processing sum-of-squares programs in practice, IEEE Transactions on Automatic Control, 54-5, pp. 1007-1011, 2009.