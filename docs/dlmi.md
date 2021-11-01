---
sidebar_label: '拡大LMI'
sidebar_position: 3
---

# 拡大LMI

```
Linear matrix variable 12x12 (symmetric, real, 20 variables)
Coeffiecient range: 0.0057233 to 2.0821

拡大LMIの文字列: He( LMI )
LMI:
    "X*A+comp*C2"    "X*B1+comp*D21"    "zeros(4,3)"      "(X-X0)*B2" 
    "zeros(3,4)"     "-eye(p1)*0.5"     "zeros(3,3)"      "zeros(3,2)"
    "C1+D12*Y*C2"    "D11+D12*Y*D21"    "-eye(p1)*0.5"    "zeros(3,2)"
    "G*(Y-Y0)*C2"    "G*(Y-Y0)*D21"     "zeros(2,3)"      "-G"        
comp:
    "X0*B2*Y0+(X-X0)*B2*Y0+X0*B2*(Y-Y0)"
```

```
Linear matrix variable 6x6 (symmetric, real, 20 variables)
Coeffiecient range: 0.037235 to 2

拡大LMIの文字列: He( LMI )
LMI:
    "X*A+comp*C2"    "(X-X0)*B2"
    "(Y-Y0)*C2"      "-eye(2)"  
comp:
    "X0*B2*Y0+(X-X0)*B2*Y0+X0*B2*(Y-Y0)"
```