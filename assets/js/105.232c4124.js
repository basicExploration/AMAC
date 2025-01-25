(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{535:function(t,a,n){"use strict";n.r(a);var v=n(36),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"atomic"}},[t._v("atomic")]),t._v(" "),n("p",[t._v("原子包是比互斥锁更底层的包，如果在简单的场景下，使用 sync.Mutex 可能会比较复杂，并且耗费资源，那么使用更加底层的 atomic 就更加划算了")]),t._v(" "),n("p",[t._v("所谓原子操作，就是当某 goroutine 去执行原子操作时，其它 goroutine 只能看着，这个操作要么成功，要么失败，不会有第三个状态")]),t._v(" "),n("p",[t._v("原子包操作对象的时候，都是操作的地址，所以谨记不要使用值操作而是要指针操作")]),t._v(" "),n("h2",{attrs:{id:"介绍一下-atomic-的内容"}},[t._v("介绍一下 atomic 的内容")]),t._v(" "),n("ul",[n("li",[t._v("Add：例如 "),n("code",[t._v("func AddInt32(addr *int32,delta int32)(new int32)")]),t._v(" 给第一个参数地址指向的数据值增加一个 delta 并返回新的数据")]),t._v(" "),n("li",[t._v("CompareAndSwap：例如 "),n("code",[t._v("func CompareAndSwapInt32(addr *int32,old,new int32)(swapped bool)")]),t._v(" 比较 addr 指向的数据是否等于 old，如果不等于返回 false，如果等于就将此地址的值切换为 new 值，并且返回 true")]),t._v(" "),n("li",[t._v("Load：例如 "),n("code",[t._v("func LoadInt32(addr *int32)(val int32)")]),t._v(" 读取 addr 指向的值并返回")]),t._v(" "),n("li",[t._v("Store：例如 "),n("code",[t._v("func StoreInt32(addr *int32,val int32)")]),t._v(" 将 val 值写入到 addr 指向的内存空间中")]),t._v(" "),n("li",[t._v("Swap：例如 "),n("code",[t._v("func SwapInt32(addr *int32,new int32)(old int32)")]),t._v(" 将 addr 指向的值切换为 new 值，并返回旧值")]),t._v(" "),n("li",[t._v("Value："),n("code",[t._v("type Value")]),t._v(" "),n("code",[t._v("func(*Value) Load")]),t._v(" "),n("code",[t._v("func(*Value) Store")]),t._v(" 原子的存取数据")])]),t._v(" "),n("p",[t._v("目前 atomic 还没有部署泛型，所以里面到处充斥者 "),n("code",[t._v("LoadInt32")]),t._v(" "),n("code",[t._v("LoadInt64")]),t._v(" 这种类型的函数，以后等泛型部署到原子包后就不会这么繁琐了")]),t._v(" "),n("h2",{attrs:{id:"基于原子库的第三方扩展"}},[t._v("基于原子库的第三方扩展")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("uber-go/atomic 定义扩展了几种常见类型的原子操作，例如 bool error string 等")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" atom atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uint32\natom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\natom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\natom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CompareAndSwap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("看起来的确比官方提供的原子包更加简洁一些")])])]),t._v(" "),n("h2",{attrs:{id:"issues"}},[t._v("issues")]),t._v(" "),n("h3",{attrs:{id:"对一个地址的赋值是原子操作吗"}},[t._v("对一个地址的赋值是原子操作吗？")]),t._v(" "),n("p",[t._v("如果对于单核处理器的机器来说，地址的赋值是原子操作")]),t._v(" "),n("p",[t._v("在现在的系统中，write 的地址基本上都是对齐的")]),t._v(" "),n("p",[t._v("对齐地址的写，不会导致其他人看到只写了一半的数据，因为它通过一个指令就可以实现对地址的操作，如果地址不是对齐的话，那么，处理器就需要分成两个指令去处理，如果执行了一个指令，其它人就会看到更新了一半的错误的数据，这被称做撕裂写")]),t._v(" "),n("p",[t._v("所以，你可以认为赋值操作是一个原子操作")]),t._v(" "),n("p",[t._v("但是，对于现代的多处理多核的系统来说，由于 cache、指令重排，可见性等问题，我们\n对原子操作的意义有了更多的追求。")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("在多核系统中，一个核对地址的值的更改，在更新到主内存中之前，是在多级缓存中存放的。这时，多个核看到的数据可能是不一样的")])])]),t._v(" "),n("p",[t._v("多处理器多核心系统为了处理这类问题，使用了一种叫做内存屏障 (memory fence 或\nmemory barrier) 的方式。一个写内存屏障会告诉处理器，必须要等到它管道中的未完成\n的操作 (特别是写操作) 都被刷新到内存中，再进行操作。")]),t._v(" "),n("p",[t._v("atomic 包提供的方法会提供了一些的功能，不仅仅可以保证赋值的数据完整性，还能保证数据的可见性，一旦一个核更新了该地址的值，其它处理器总是能读取到它的最新值。")]),t._v(" "),n("p",[t._v("atomic 包主要利用了以下几点技术：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("编译器插入内存屏障 (Memory Barrier) 指令\n编译器会在 atomic 操作前后插入内存屏障指令，来限制 CPU 的乱序执行，保证在该操作前的读写操作都完成，之后的读写都待其完成后再执行。")])]),t._v(" "),n("li",[n("p",[t._v("硬件支持的原子 CPU 指令\n如 X86 的 LOCK 指令可以将某些指令变为原子指令。atomic 会利用 CPU 提供的这些原子指令实现加锁。")])]),t._v(" "),n("li",[n("p",[t._v("缓存一致性硬件协议\n如 Intel 的 MESI 协议可以在多核间保证缓存的一致性。atomic 利用缓存一致性，使得多个核心缓存中的数据版本是一致的。")])]),t._v(" "),n("li",[n("p",[t._v("核心间互斥\natomic 中的原子操作会在多核间加锁，保证同时只有一个核心可以操作共享变量。")])])]),t._v(" "),n("p",[t._v("需要注意的是，因为需要处理器之间保证数据的一致性，atomic 的操作是会降低性能的。")]),t._v(" "),n("p",[t._v("综上所述，"),n("em",[n("strong",[t._v("对于单核机器来说，普通的地址赋值就是原子操作，但是对于多核机器来说，不属于原子操作，原子包去进行的赋值一定是原子操作")])])]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),n("ul",[n("li",[t._v("go.dev")]),t._v(" "),n("li",[t._v("https://time.geekbang.org/column/intro/100061801")]),t._v(" "),n("li",[t._v("《go 进阶训练营》")]),t._v(" "),n("li",[t._v("《go 语言精进之路》")])])])}),[],!1,null,null,null);a.default=_.exports}}]);