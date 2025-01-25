(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{522:function(t,s,n){"use strict";n.r(s);var a=n(36),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"内存对齐实践"}},[t._v("内存对齐实践")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sex "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 性别")]),t._v("\n  Height "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 身高")]),t._v("\n  Addr "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n  Postion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n  age "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("\n  weight "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("我们分别算一下数据实际的大小和在内存中的的偏移量以及整个结构体因为内存对齐所一共占有的内存数据")]),t._v(" "),n("p",[t._v("实际大小")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sex "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  Height "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n  Addr "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  Postion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  age "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8")]),t._v("\n  weight "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("偏移量")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sex "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n  Height "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n  Addr "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4")]),t._v("\n  Postion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n  age "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n  weight "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("实际在内存中的排序：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("sex * height height addr postion * * age age age age age age age age weight weight \n")])])]),n("p",[t._v("在 Go 语言中，每种数据类型在内存中的字节对齐方式是不同的，主要遵循以下规则：")]),t._v(" "),n("ul",[n("li",[t._v("每个变量都会占用一块内存区域，并从这块区域的起始地址开始存储值。")]),t._v(" "),n("li",[t._v("结构体的起始地址必须是其最大字段的对齐值的倍数。")]),t._v(" "),n("li",[t._v("每个字段的起始地址必须是其类型对齐值的倍数。")]),t._v(" "),n("li",[t._v("内存对齐后的结构体大小必须是其最大字段的对齐值的倍数。")]),t._v(" "),n("li",[t._v("如果存在内存对齐的需求，编译器会在具体字段之间插入对齐字节 (padding)。")])]),t._v(" "),n("p",[t._v("我们都知道取内存地址的时候是通过下标去获取的，所以当 height 位于 sex 后面，但是 sex 只占有一个字节，但是 height 有两个字节的时候，如果要精确获取 height 的起始位置，那么必须要按照 uint16 的大小的倍数去获取，也就是 2 的倍数，那么 sex 后面肯定要跟一个空值才行，所以 height 的偏移量就是 2")]),t._v(" "),n("p",[t._v("position 也是一样，它的大小是 8，那么要获取它的位置，至少是 8 的倍数才行，所以前面要补充两个空值")]),t._v(" "),n("p",[t._v("具体的每个字段的偏移量具体分析如下：")]),t._v(" "),n("ul",[n("li",[t._v("Sex bool 占 1 字节，起始偏移为 0")]),t._v(" "),n("li",[t._v("Height uint16 需要以 2 字节对齐，所以从偏移 2 开始")]),t._v(" "),n("li",[t._v("Addr byte 占 1 字节，但前面已插入 1 字节 padding，所以从偏移 4 开始")]),t._v(" "),n("li",[t._v("Position byte 紧接着 Addr 的下一字节，所以偏移 5")]),t._v(" "),n("li",[t._v("age int64 需要以 8 字节对齐，所以从偏移 8 开始")]),t._v(" "),n("li",[t._v("weight uint16 需要以 2 字节对齐，并且要跟在 age 之后，所以从偏移 16 开始")])]),t._v(" "),n("p",[t._v("也就是说整个的结构体按照空值来算一共是 18 个字节的占有量，那么整个结构体是多少呢？")]),t._v(" "),n("p",[t._v("结构体的大小计算方法是最大值的倍数，这里就是 age 的 8 的倍数，必须要大于实际值 18，所以这里取 24")]),t._v(" "),n("h2",{attrs:{id:"下面对这个结构体进行优化"}},[t._v("下面对这个结构体进行优化")]),t._v(" "),n("h3",{attrs:{id:"顺序优化去除-padding"}},[t._v("顺序优化去除 padding")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sex "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n  Addr "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  Postion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n  Height "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n  weight "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n  age "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("现在我们看一下具体的内存排布")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("sex addr postion * height height weight weight age age age age age age age age\n")])])]),n("p",[t._v("可以看到这个时候的一共需要的数据只有 16，刚好结构体的大小是 8 的倍数，那么这个时候结构体的大小就变成了 16 字节")]),t._v(" "),n("h3",{attrs:{id:"数据类型调整"}},[t._v("数据类型调整")]),t._v(" "),n("p",[t._v("我们可以使用更小的类型去承载数据，比如使用 uint8 去替代 uint16，和 int64")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Sex "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n  Addr "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n  Postion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n  Height "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n  weight "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n  age "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("整个结构体的大小就变成了 6 个字节")]),t._v(" "),n("h3",{attrs:{id:"测试优化顺序的结构体大小"}},[t._v("测试优化顺序的结构体大小")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unsafe"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原始结构体")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" OriginalPerson "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSex     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0  offset")]),t._v("\n\tHeight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\tAddr    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n\tPostion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n\tAge     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n\tWeight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化后的结构体")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" OptimizedPerson "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSex     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 offset")]),t._v("\n\tAddr    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n\tPostion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\tHeight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n\tweight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n\tage     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" OptimizedPerson1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSex     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\tAddr    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n\tPostion "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\tHeight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\tweight  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n\tage     "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试原始结构体大小")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"原始结构体大小:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OriginalPerson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试优化后结构体大小")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"优化后结构体大小:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OptimizedPerson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试优化后结构体大小1")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"优化后结构体大小:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsafe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sizeof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OptimizedPerson1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("原始结构体大小: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\n优化后结构体大小: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n优化后结构体大小1: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);