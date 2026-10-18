$: sound("bd [~ bd] [bd,bd:1*2] [bd, <~ bd:1*2, crow/2?>]")
.every(2, hurry("<1 2> 1 1 <1 2 4>"))
$: sound("jazz*4").sometimes(hurry("2"))
$: note(`<
{[~@2 e3 a3 c4 e4 a4@2], a2, [~ c3@7]}
{[~@2 f#3 a3 d4 f#4 b4@2], a2, [~ d3@7]}
{[~@2 d3 g3 b3 d4 b4@2], g2, [~ b2@7]}
{[~@2 f3 g#3 c#4 f4 b4@2], g#2, [~ c#3@7]}
>`).lpf(800).sound("zzfx") /* Hey Kids by Marina*/
