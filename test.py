#import sys, json

# simple JSON echo script
#for line in sys.stdin:
	#print(json.dumps(json.loads(line)))
	#print(type(json.dumps(json.loads(line))))

import sys, json

# simple JSON echo script
for line in sys.stdin:
   dicti=json.dumps(json.loads(line))
   #print(dicti)
   break
#print(dicti)

#dicti=dicti.replace('command','"command"')
#dicti=dicti.replace('args','"args"')
#print(dicti)
data = json.loads(dicti)
#print(data)
val = data["args"]
#print(val)
model=int(val[0])+int(val[1])+int(val[2])+int(val[3])+int(val[4])
a =[model] 
print(a)