import { Title } from '@/components/Article/Title'
import { Body } from '@/components/Article/Body'

const content = `
When you grow up, you tend to get told the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money.
That’s a very limited life. Life can be much broader once you discover one simple fact, and that is - everything around you that you call life, was made up by people that were no smarter than you. And you can change it, you can influence it, you can build your own things that other people can use.

The minute that you understand that you can poke life and actually something will, you know if you push in, something will pop out the other side, that you can change it, you can mold it. That’s maybe the most important thing. It’s to shake off this erroneous notion that life is there and you’re just gonna live in it, versus embrace it, change it, improve it, make your mark upon it.

I think that’s very important and however you learn that, once you learn it, you’ll want to change life and make it better, cause it’s kind of messed up, in a lot of ways. Once you learn that, you’ll never be the same again.


大人になると、この世界とはこういうもので、自分の人生も、その中にある人生を生きることだ、と言い聞かされることになりがちだ。壁を叩くようなことはしすぎるな。良い家庭をもって、楽しみ、少しばかりの金を貯めよう。

そういうのは、とても制約された人生だ。たったひとつ、単純な事実に気づけば、人生は可能性がずっと開けたものとなる。それは、自分を取り囲んでいるすべてのもの、人生と呼んでいるものが、自分より賢いわけではない人々が作り出しているということだ。周りの状況は自分で変えられるし、自分が周りに影響を与えることもできるし、自分のものを自分で作ることも、他の人々にもそれを使ってもらうこともできるのだ。

人生だと思っていたことも、突いてみることができ、自分が何かを押し込むことで、反対側で何かが突き出たりするのだと悟り、人生は変えることができると理解すれば、自分で人生を造形していくことができる。それこそが、おそらく何よりも大切なことなのだ。それこそが、人生はそこにあり、自分はその中で生きるしかないという誤った考えを揺さぶって振り払い、人生を抱きしめ、変化させ、改善し、自分自身の痕跡を刻み込むということなのだ。

私はこれはとても大切なことだと思うし、どのようにそれを学んだかに関わらず、それを学んだ者は、このいろいろな意味で厄介なことがらを抱え込んだこの人生を変化させ、より良いものにしようと望むことになるのだと思っている。一度このことを学べば、それまでのままではいられないのだ。
`

const Article = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-5 sm:w-full lg:w-1/2 mx-auto">
        <Title title="Article" subtitle="Subtitle" />
        <Body content={content} />
      </div>
    </div>
  )
}

export default Article
