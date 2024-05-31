// TODO: Ke komponentám nedáváme dovětek ...Component. To že se jedná o komponentu nám řekne první velké písmeno
// TODO: Na základě vstupních dat, šla kompoenta zjednodušit viz. kód
export default function DailyMenuFood({food, type, price}) {

  if(!food) return <div/>

  const title = (type === "soup") ? "Polévka" :
    (type === "weeklySpecial") ? "Týdenní specialita" :
      (type === "mainMeal") ? "Hlavní jídla" :
        (type === "desert") ? "Dezert" : null

  return (
    <div className="dailyMenuFood">

      {title ?
        <div className="foodType">
          <h2>{title}</h2>
        </div>
        : ""
      }

      <div className="foodContainer">
        <div className="foodName">
          <p>{food}</p>
        </div>
        <div className="foodPrice">
          <p>{price + " Kč"}</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}