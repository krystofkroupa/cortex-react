import {useLayoutEffect} from "react"
import {useLocation} from "react-router-dom"

// TODO: Zápis anonymní funkce přiřazené do kontasnty je za mě fakt zbytečný, vypadá to cool, ale význam to nemá. Předělal jsem na funkci.
export default function ScrollToHashElement () {
    const location = useLocation();

    useLayoutEffect(() => {
        const { hash } = location;

        //TODO: Zase annonymní funkce a const. Pryč s tim
        const removeHashCharacter = (str) => {
            // TODO: Tohle je detail, ale vytvářet proměnnou zbytečný
            return str.slice(1);
        };

        if (hash) {
            const element = document.getElementById(removeHashCharacter(hash));

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'nearest',
                });
            }
        }
    }, [location]);

    return null;
}