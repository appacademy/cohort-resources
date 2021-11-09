 72: 7.object_id
 73: "hello world".object_id
 74: 234234234235.object_id
 75: 2342343.object_id
 76: 123.object_id
 77: a = 7
 78: 7.object_id == a.object_id
 79: old_a = a.object_id
 80: b = 9
 81: old_b = b.object_id
 82: a += b
 83: a.object_id == old_a
 84: b.object_id == old_b
 85: a = 9
 86: b = 9
 87: c = 9
 88: a.object_id == b.object_id
 89: b.object_id == c.object_id
 90: a = "hello"
 91: b = "hello"
 92: a.object_id == b.object_id
 93: a = "hello"
 94: b = a
 95: a.object_id == b.object_id
 96: a = :test
 97: b = :test
 98: a.object_id == b.object_id
 99: a = [1,2,3]
100: old_a = a.object_id
101: a.each {|el| p el.object_id}
102: a[0].object_id == 1.object_id
103: b = a
104: a
105: b
106: old_b = b.object_id
107: old_a == old_b
108: c = [1,2,3]
109: a.object_id == c.object_id
110: b[1] = 4
111: b
112: a
113: a.object_id == old_a
114: a[0].object_id == c[0].object_id
115: a
116: b
117: b[2] = 7
118: b
119: a
120: a.push(2)
121: a
122: a.object_id == old_a
123: b
124: b.concat(5)
125: b.concat([3,5])
126: b.object_id == old_b
127: a
128: a += [8,9]
129: a
130: b
131: a.object_id == old_a
132: def add_pos(arr)
133:   arr += [[1,2]]
134: end
135: x = [[0,1],[2,3],[9,2]]
136: add_pos(x)
137: x
138: def add_pos(arr)
139:   arr.concat([1,2])
140: end
141: add_pos(x)
142: x
143: def add_pos(arr)
144:   arr.concat([[1,2]])
145:   enx
146: end
147: add_pos(x)
148: exit
149: arr = Array.new(3, "hello")
150: arr
151: arr.each {|el| puts el.object_id}
152: arr[0].concat("goodbye")
153: arr
154: arr = Array.new(3) {"hello"}
155: arr.each {|el| puts el.object_id}
156: h = Hash.new([])
157: h
158: h[:greetings]
159: h[:farewells]
160: h[:greetings].object_id == h[:farewells].object_id
161: h[:greetings] << "hello"
162: h[:farewells]
163: h
164: h[:greetings] = ["hello"]
165: h[:greetings].object_id == h[:farewells].object_id
166: h = Hash.new { Array.new }
167: h[:greetings]
168: h[:farewells]
169: h[:greetings].object_id == h[:farewells].object_id
170: h[:greetings] << "hello"
171: h[:greetings]
172: h
173: h = Hash.new {|h,k| h[k] = []}
174: h[:greetings]
175: h
176: h[:farewells]
177: h
178: h[:greetings] << "hello"
179: h
180: count = Hash.new(0)
181: count[:darren] += 1000000
182: count
183: count[:joannes]
184: count
185: count[:spencer] -= 500
186: count
187: count[:diego]
188: count
189: count[:presley] = count[:presley] + 2
190: count
191: exit