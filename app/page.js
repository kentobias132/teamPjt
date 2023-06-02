import Footer from "./components/footer";
import MoreDetails from "./components/moreDetails";

export default function Home() {
  return (
    <main className=" bg-[rgb(36,36,36)]">
      <h2>hello every one</h2>
      <MoreDetails
        heading={"Enjoy on your TV"}
        parag={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
        img="/images/tvImg.png"
      />
      <MoreDetails
        heading={"Download your shows to watch offline"}
        parag={"Save your favorites easily and always have something to watch."}
        img="/images/mob2.jpg"
        flip={true}
      />
      <MoreDetails
        heading={"Watch everywhere"}
        parag={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        img="/images/mob2.jpg"
      />
      <MoreDetails
        heading={"Create profiles for kids"}
        parag={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
        img="/images/img3.png"
        flip={true}
      />

      <Footer />
    </main>
  );
}
