---
sidebar_label: 'BMIの記述'
sidebar_position: 2
---

# BMIの記述


```matlab title=極配置
% 手動計算，真値
BMImanual = X*(A+B2*Y*C2)+(A+B2*Y*C2)'*X';
%
Q0 = X*A+A'*X';
L = eye(n,n);
N = B2;
R = C2;
%
LMImanual = [Q0+L*X*N*Y0*R+L*X0*N*Y*R-L*X0*N*Y0*R+(L*X*N*Y0*R+L*X0*N*Y*R-L*X0*N*Y0*R)',...
             L*(X-X0)*N+R'*(Y-Y0)'*G';...
            (L*(X-X0)*N+R'*(Y-Y0)'*G')',...
             -(G+G')];
```


```c title=Hinf
Fstr = "[X*(A+B2*Y*C2)+(A+B2*Y*C2)'*X'  X*(B1+B2*Y*D21)     (C1+D12*Y*C2)';"+...
        "(B1+B2*Y*D21)'*X'               -eye(p1)           (D11+D12*Y*D21)';"+...
        "C1+D12*Y*C2                     D11+D12*Y*D21       -eye(p1)]";

LMIauto = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'})
[LMIauto, LMIstr] = linearizebmi(Fstr,{'X','Y'},{'X0','Y0'},'G')
```