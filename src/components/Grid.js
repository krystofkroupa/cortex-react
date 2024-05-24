import ButtonLink from './ButtonLink'

export default function Grid() {
    return (
        <div className="grid-container">
            <article className="grid-testimonial grid-col-span2 grid1">
                <div className="pivnimenu-header">
                    <div className="article-headerPivni">
                        <div className="article-pivniMenuText">
                            <h1>PIVNÍ MENU</h1>
                            <img src={require('../assets/vycep.png')}/>
                        </div>
                    </div>
                </div>
                <div className="article-text">
                    <div className="article-content">
                        <p>Výběr piv z regionálních pivovarů a pivní speciály na deseti výčepních kohoutech.
                            Piva možno zakoupit s sebou načepovaná v 1,5l PET lahvích.</p>
                    </div>
                </div>
                <div className="button-poledni">
                    <a>
                        <button>Zjistit více</button>
                    </a>
                </div>
            </article>
            <article className="grid-testimonial grid2">
                <div className="article-header">
                    <div className="article-photo">
                        <img src={require('../assets/pribory.png')}/>
                    </div>
                    <div className="article-headerText">
                        <div className="article-poledni">
                            <h1>POLEDNÍ</h1>
                        </div>
                        <div className="article-menu">
                            <h1>MENU</h1>
                        </div>
                    </div>
                </div>
                <div className="article-text">
                    <div className="article-content">
                        <p>Každý den pro Vás připravujeme domácí českou a čerstvou polední nabídku.</p>
                    </div>
                </div>
                <div className="button-poledni">
                    <ButtonLink title={'Zjistit více'} link={'/poledni'}/>
                </div>
            </article>
            <article className="grid-testimonial grid-row-span2 grid3">
                <div className="article-header">
                    <div className="article-photo">
                        <img src={require('../assets/logoOrange.png')}/>
                    </div>
                    <div className="article-headerText">
                        <div className="article-poledni">
                            <h1>O NÁS</h1>
                        </div>
                    </div>
                </div>
                <div className="article-text">
                    <div className="article-content">
                        <p>Milujeme Malešice, historii, tradice, veselou společnost, dobré jídlo a hlavně dobré
                            pivo.
                            Tyhle lásky nás přiměly dát starému nový kabát a provést celkovou rekonstrukci domu
                            a
                            otevřít náš rodinný Malešický mikropivovar. Připravujeme originální piva dle
                            vlastních
                            receptůr, která se vaří speciálně pro Malešický
                            mikropivovar u nás i v zahraničí.
                            Jste srdečně zváni a budete vřele vítáni. Těšíme se na Vaši návštěvu a uděláme
                            maximum pro
                            to, aby každý den byl originál.
                        </p>
                    </div>
                </div>
                <div className="button-poledni">
                    <ButtonLink title={'Fotogalerie'} link={'/fotogalerie'}/>
                </div>
            </article>
            <article className="grid-testimonial grid4">
                <div className="article-header">
                    <div className="article-photo">
                        <img src={require('../assets/pulitr.png')} alt="pribory"/>
                    </div>
                    <div className="article-headerText">
                        <div className="article-poledni">
                            <h1>NAŠE PIVA</h1>
                        </div>
                    </div>
                </div>
                <div className="article-text">
                    <div className="article-content">
                        <p>V současnosti máme v nabídce dva Malešické Originály. Voňavý svrchně kvašený pale
                            ALE 11° a
                            tradiční spodně kvašený ležák 12°.
                        </p>
                    </div>
                </div>
                <div className="button-poledni">
                    <a>
                        <button>Zjistit více</button>
                    </a>
                </div>
            </article>
            <article className="grid-testimonial grid-col-span2 grid5">
                <div className="rozvozy-center">
                    <div className="rozvozy-text">
                        <h1>ROZVOZ</h1>
                    </div>
                    <div className="rozvozy-logo">
                        <a href="https://www.foodora.cz/restaurant/k2ko/malesicky-mikropivovar" target="_blank"
                           rel="noreferrer">
                            <img src={require('../assets/foodora.png')} alt="wolt logo"/>
                        </a>
                        <a href="https://wolt.com/cs/cze/prague/restaurant/malesicky-mikropivovar"
                           target="_blank" rel="noreferrer">
                            <img src={require('../assets/wolt.png')}/>
                        </a>
                        <a href="https://food.bolt.eu/cs-CZ/271-prague/p/39520-male%C5%A1ick%C3%BD-mikropivovar"
                           target="_blank" rel="noreferrer">
                            <img src={require('../assets/bolt.png')} alt="bolt logo"/>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}