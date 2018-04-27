# -*- coding: utf-8 -*-
"""
Created on Thu Apr 19 13:47:00 2018

@author: emma
"""

import pickle
import dill
import numpy as np
import sys, json

# 輸入參數
for line in sys.stdin:
   dicti=json.dumps(json.loads(line))
   #print(dicti)
   break
data = json.loads(dicti)
val = data["args"]

# Model
with open("./mv1", 'rb') as f:
    loaded_model = pickle.load(f)
 
#val = [2001,1998,17,194838,1]

testdata = np.array(val)
#print(testdata.reshape(1,-1))
allZero=np.zeros([1,554])
#print(allZero.shape)
combined = np.append(testdata,allZero)
#print(combined)
ans=loaded_model.predict(combined.reshape(1,-1)) #ans is np.ndarray type object
pp = ans[0]
print(pp)