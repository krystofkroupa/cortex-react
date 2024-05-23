export default function Home() {
    return (
        <div className="animate-this">
            <div className="main" id="main1">
                <div className="logo-background">
                    <img src="public/logo-bg.png" alt="logo-background"/>
                </div>
                <div className="grid-container">
                    <article className="grid-testimonial grid-col-span2 grid1">
                        <div className="pivnimenu-header">
                            <div className="article-headerPivni">
                                <div className="article-pivniMenuText">
                                    <h1>PIVNÍ MENU</h1>
                                    <img src="src/img/vycep.png" alt="vycepni cisla"/>
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
                                <img src="src/img/pribory.png" alt="pribory"/>
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
                            <a>
                                <button>Zjistit více</button>
                            </a>
                        </div>

                    </article>
                    <article className="grid-testimonial grid-row-span2 grid3">
                        <div className="article-header">
                            <div className="article-photo">
                                <img src="src/img/logoOrange.png" alt="logo"/>
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
                            <a>
                                <button>Fotogalerie</button>
                            </a>
                        </div>
                    </article>
                    <article className="grid-testimonial grid4">
                        <div className="article-header">
                            <div className="article-photo">
                                <img src="src/img/pulitr.png" alt="pribory"/>
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
                                <a href="https://www.foodora.cz/restaurant/k2ko/malesicky-mikropivovar" target="_blank" rel="noreferrer">
                                    <img src="src/img/foodora.png" alt="wolt logo"/>
                                </a>
                                <a href="https://wolt.com/cs/cze/prague/restaurant/malesicky-mikropivovar"
                                   target="_blank" rel="noreferrer">
                                    <img src="src/img/wolt.png" alt="foodora logo"/>
                                </a>
                                <a href="https://food.bolt.eu/cs-CZ/271-prague/p/39520-male%C5%A1ick%C3%BD-mikropivovar"
                                   target="_blank" rel="noreferrer">
                                    <img src="../cortex-react/public/bolt.png" alt="bolt logo"/>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="fill"></div>
                <div className="custom-shape-divider-top-16872040701">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="main2" id="test2">
                <div className="fill2"></div>
                <div className="custom-shape-divider-top-1687204070">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}