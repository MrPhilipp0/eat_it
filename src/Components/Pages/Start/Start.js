import Card from './Card';

import '../StylesPage.css';

const cards = [
  {
    title: "Eat It - z czym to się je?",
    description: "Eat It jest tutaj, aby pomóc Ci przygotowywać przepyszne posiłki, redukując niepotrzebny stres oraz dostarczając dużo radości. Oferuje wiele ciekawych przepisów z możliwością dodawania własnych. Doskonały sposób na kontrolowanie własnej diety.",
    svg: "svg",
  },
  {
    title: "Produkty",
    description: "Przestrzegasz swojej diety, ale nie wiesz ile kalorii ma konkretny produkt? Eat It pomoże Ci kontrolować co jesz, ile białka, węglowodanów czy kalorii dostarczy Ci ten produkt. Jeżeli nie ma go na liście - dodaj go!",
    svg: "svg",
  },
  {
    title: "Przepisy",
    description: "Eat It dostarcza wiele przepysznych i ciekawych przepisów. Nie wiesz co zrobisz dzisiaj na obiad? Chcesz zrobić spaghetti, ale masz jedynie połowę wymaganej ilości makaronu? Eat It pomoże Ci w tym. Dodaj własny przepis i gotuj ze spokojem.",
    svg: "svg",
  },
  {
    title: "Lista zakupów",
    description: "Stwórz własną listę zakupów dodając odpowiednie produkty. Zarządzaj ją, dodawaj nowe produkty, usuwaj i edytuj. Po zrobieniu zakupów usuń listę i zacznij gotować!",
    svg: "svg",
  },
]

const Start = () => {
  return (
    <section className="page px-5 py-3">
      {cards.map((card,index) => <Card key={card.title} {...card} index={index}/>)}
    </section>
  );
}
 
export default Start;