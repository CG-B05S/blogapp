import { createContext } from "react";

const initialState = {
  home: [],
  bollywood: [
    {
      id: "bw4pid30ff84",
      img1: "https://www.rollingstone.com/wp-content/uploads/2022/10/Jin-of-BTS_The-Astronaut-Concept-Photo_Outlander-1.jpg?w=1581&h=1054&crop=1",
      Heading1: "Song You Need to Know: Jis “The Astronaut”",
      sub1: "The dreamy track, co-written with Coldplay, is a gift for fans inspired by a powerful conversation Jin had with Chris Martin BTS Jin has been getting fans excited about his latest solo release, and it's finally here: The Astronaut is a dreamy track that he co-wrote with Coldplay, marking the second time BTS has collaborated with the British rock band, following the platinum 2021 hit ",
      subh1: "Travel",
      date1: "/ september 19 2022",
    },
    {
      id: "bw5pid30ff84",
      img1: "https://www.pngmart.com/files/22/Elon-Musk-PNG-Isolated-File.png",
      Heading1: "Elon Musk Completes $44 Billion Deal to Own Twitter. Finally.",
      sub1: "Elon Musk's Bid to Buy Twitter The world's richest man closed his blockbuster purchase of the social media service, thrusting Twitter into a new era. Send any friend a story As a subscriber, you have 10 gift articles to give each month. Anyone can read what you share.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw6pid30ff84",
      img1: "https://dn3bmh8yk8vvw.cloudfront.net/SZ6oqwCya1HXCtDlTsEGnrQioak=/production-17169-me9TLyxbJ7a5-ScreenShot20181126at3.48.27PM.png",
      Heading1: "Police ram pair off scooter after 60mph pursuit",
      sub1: "Police have released dramatic footage of officers ramming a scooter rider following a high-speed pursuit. The dashcam footage shows the Hampshire police vehicle pursuing a black Honda 125cc scooter at speeds of 60mph in a 30mph limit on The Avenue, Southampton.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "104",

      img1: "https://assets.zerohedge.com/s3fs-public/styles/inline_image_mobile/public/inline-images/finlandtroops.png?itok=vdNg0xvm",
      Heading1: "Finland Willing To Host NATO Nuclear Weapons On Border With Russia",
      sub1: "Authored by Dave DeCamp via AntiWar.com, NATO nuclear weapons could potentially be placed on Russia's border with Finland if Helsinki joins the Western military alliance, reported on Wednesday, citing a Finnish newspaper. The newspaper Iltalehti reported that the bill the Finnish government will put before the country's parliament on joining NATO doesn't include any opt-outs for hosting nuclear weapons.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw7pid30ff84",

      img1: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/Joe-Biden-Americans-Most-Important-Issues.jpg?ve=1&tl=1",
      Heading1: "Biden daily gaffe average: The president is batting nearly a thousand",
      sub1: "President Biden averaged nearly a gaffe per workday over the past four weeks, errors that included mispronunciations, confusion, inaccuracies, and forgetting that a congresswoman had died. Biden is hitting .810 from September 26 to October 24, committing at least 17 gaffes.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw8pid30ff84",

      img1: "https://storage.googleapis.com/afs-prod/media/8fb6c4c48b3b47639bcb12e64eb7ebda/1000.jpeg",
      Heading1: "Shanghai district orders mass COVID-19 testing, lockdown",
      sub1: "BEIJING (AP) - China's largest city of Shanghai is ordering mass testing Friday on all 1.3 million residents of its downtown Yangpu district and confining them to their homes at least until results are known.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "bw9pid30ff84",

      img1: "https://nypost.com/wp-content/uploads/sites/2/2022/10/hitler-kanye-comments-comp.jpg?quality=75&strip=all",
      Heading1:
        "Kanye West has a long history of touting Hitler, sources reveal: report",
      sub1: "A business executive who worked for Kanye West has alleged the rapper has long admired Adolf Hitler - and many close to him have been well aware.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  hollywood: [
    {
      id: "bw10pid30ff84",
      img1: "https://video-images.vice.com/articles/62dec555ecf922009469d946/lede/1658767752389-untitled-design4.png?crop=1xw:1xh;center,center&resize=500:*",
      Heading1: "Ex-Google boss thinks AI is as dangerous as nuclear bombs",
      sub1: "At a panel discussion at the Aspen Security Forum on potential AI threats, Schmidt raised the specter of an AI arms race between the US and China. He compared the current situation with the 1950s and 1960s when the horror scenario of a possible nuclear attack hung over some countries like the sword of Damocles. After the US atomic bombs were dropped on Hiroshima and Nagasaki in August 1945, China and the Soviet Union armed themselves with similar weapons. In addition to the USA, China, and the Soviet Union, France and Great Britain were among the five so-called official nuclear powers that signed the Nuclear Non- Proliferation Treaty, which came into force in 1970 (France and China did not sign until 1992). India, Pakistan, North Korea, and Israel have nuclear weapons, too. Officially, nuclear weapons are intended to serve as a deterrent.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw4pid30ff84",
      img1: "https://api.time.com/wp-content/uploads/2022/06/Sky-Eye-China-Telescope.jpg?quality=85&w=800",
      Heading1: "Did a Chinese radio telescope detect alien signals?",
      sub1: "According to Science and Technology Daily, a publication of the Chinese Ministry of Science and Technology, Zhang Tonjie’s team used the Five-hundred-Meter Aperture Spherical Radio Telescope (Fast) to detect narrowband electromagnetic signals that differed from previously recorded signals.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw5pid30ff84",
      img1: "https://www.swissinfo.ch/resource/image/47725786/landscape_ratio3x2/880/587/65d37fe92f5c40bbca22446e7b9dd064/17A54207F5B78BC3D25915255E059482/lhcnew.jpg",
      Heading1: "CERN’s LHC resumes operations at record energy levels",
      sub1: "Scientific will restart the Large Hadron Collider (LHC) today, Tuesday (5 July 2022). The particle accelerator at the European nuclear research center CERN in Geneva has been out of service for three years.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw6pid30ff84",
      img1: "https://www.politico.com/dims4/default/dd90d9f/2147483647/strip/true/crop/6482x4321+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Ff0%2F54%2Faa6f63a243aca3f8106bec6b89ab%2Fhouse-intelligence-47645.jpg",
      Heading1: "U.S. Congress holds hearing on UFOs",
      sub1: "The American people expect and deserve their leaders in government and intelligence to seriously evaluate and respond to any potential national security risks—especially those we do not fully understand",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw7pid30ff84",
      img1: "https://www.kff.org/wp-content/uploads/2021/02/9440-03-Figure-1.png?resize=800,450",
      Heading1: "Pandemic: Depression and eating disorders among adolescents continue to rise",
      sub1: "The pandemic has massive consequences for the health of children and young people in Germany. In 2021, depression and eating disorders continued to rise among adolescents between the ages of 15 and 17. Girls with mental illnesses were treated as inpatients significantly more often than boys. At primary school age, there was a noticeable increase in disorders of social functions and an increase in developmental disorders. ",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw8pid30ff84",
      img1: "https://images.fastcompany.net/image/upload/w_937,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/06/p-1-how-the-mayflower-became-the-first-autonomous-ship-to-cross-the-atlantic-ocean.webp",
      Heading1: "Fully automated ship “Mayflower 400” succeeds in crossing the Atlantic",
      sub1: "The fully autonomous trimaran Mayflower 400 (Mayflower Autonomous Ship – MAS) made the Atlantic crossing on Sunday after 40 days and a series of breakdowns. With the arrival in the port of Halifax in the eastern Canadian province of Nova Scotia (Nova Scotia), the 3500 miles long mission of the autonomous ship has now been completed successfully.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "hw9pid30ff84",
      img1: "https://www.extremetech.com/wp-content/uploads/2012/12/us-military-setting-up-a-satellite-dish-640x353.jpg",
      Heading1: "US military transmits power wirelessly over a mile",
      sub1: "A team from the Naval Research Laboratory (NRL), a US Navy research facility, transmitted 1.6 kilowatts of electrical energy over a distance of one kilometer. According to the NRL, it was “the most significant demonstration of power beaming in nearly 50 years”.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  technology: [
    {
      id: "hw10pid30ff84",
      img1: "https://static.euronews.com/articles/stories/06/68/10/98/750x398_cmsv2_c963c28b-5ae0-5932-aa01-ea94ec5694f9-6681098.jpg",
      Heading1: "Russia’s Poseidon torpedoes for nuclear tsunamis",
      Heading2:
        "A blockchain is a distributed database  that is shared among the network",
      sub1: "recently, the Kremlin threatened the use of the “Satan 2” nuclear missiles. Now, a Russian state TV channel contemplated the use of nuclear torpedoes. These torpedoes, dubbed Poseidon, could shift the balance of power in Russia’s favor, according to Western military experts. These nuclear-powered giant torpedoes are launched from Russian",
      subh1: "Travel",
      blog: "A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.",
      date1: "/ August 19 2017",
    },
    {
      id: "th1pid30ff84",
      img1: "https://image.cnbcfm.com/api/v1/image/107121746-1663726673043-gettyimages-1243394761-20090101220921-99-839631.jpeg?v=1666253480&w=740&h=416&ffmt=webp",
      Heading1: "Putin will not win the war",
      Heading2:
        "Chancellor Olaf Scholz addressed the nation on TV in the evening. In his speech, he emphasized the historical legacy of May 8 and explained Germany’s decision to supply heavy weapons to Ukraine.",
      sub1: "It is all the more painful to experience how today, 77 years after the end of the Second World War, brute force is once again breaking the law in the middle of Europe. How Russia’s army kills men, women, and children in Ukraine, reduces cities to rubble, and even attacks those who are fleeing. For me, this is a May 8th like no other. That’s why I’m turning to you today.",
      subh1: "Travel",
      blog: "President Putin even equates his barbaric war of aggression with the fight against National Socialism. This is historically falsified and infamous. It is our duty to state this clearly. But it’s not done with that. It was the Allied military victory that put an end to the Nazi dictatorship in Germany. We Germans are grateful for that to this day! In 1985, the Federal President at the time, Richard von Weizsäcker, ",
      date1: "/ August 19 2017",
    },
    {
      id: "th2pid30ff84",
      img1: "https://image.cnbcfm.com/api/v1/image/106509330-1588069334820usnavyufo2.png?v=1588071060&w=740&h=416&ffmt=webp",
      Heading1: "Public U.S. MoD UFO report was incomplete",
      Heading2: "Unspectacular public UFO report",
      sub1: "It should be noted that the military does not speak of unidentified flying objects (UFO) in the report, but of unidentified aerial phenomena (UAP). The originally published report consists of nine pages. The report focused on sightings from 2004 to 2021. In addition, the agency looked for natural explanations for the unidentifiable objects, not for extraterrestrial origin.",
      subh1: "Travel",
      blog: "According to the report, some sightings were birds, balloons, but also plastic bags. Natural atmospheric phenomena such as ice crystals, moisture, and thermal fluctuations were also concluded. The threat of foreign unknown technologies also counts towards some UAP sightings.",
      date1: "/ August 19 2017",
    },
    {
      id: "th3pid30ff84",
      img1: "https://techcrunch.com/wp-content/uploads/2020/07/KSC-20190225-PH_SPX01_0001large.jpg?w=1390&crop=1",
      Heading1: "SpaceX: No more Crew Dragon capsules for now",
      Heading2: "Crew Dragons bring people to the ISS",
      sub1: "Elon Musk’s company SpaceX originally developed the Crew Dragons for NASA’s Commercial Crew Program to ferry agency astronauts back and forth from the ISS. In September last year, the company flew its first private crew, a group of four civilians. They made a three-day orbit.",
      subh1: "Travel",
      blog: "On April 3, the Spanish-American astronaut Michael López-Alegría will fly to the ISS as a commander with three other astronauts in a Crew Dragon. The launch will be from the Cape Canaveral Spaceport in Florida, and the whole thing will be organized by the private space company Axiom in cooperation with the US space agency Nasa. The crew wants to stay on the ISS for around a week and meet, among other things, the German astronaut Matthias Maurer, who has been there since November.",
      date1: "/ August 19 2017",
    },
    {
      id: "th83pid30ff84",
      img1: "https://techstory.in/wp-content/uploads/2022/04/crypto-banned-shutterstock_714440392-1536x1017.jpg",
      Heading1: "MEPs want to ban anonymous crypto payments in the European Union",
      Heading2: "Criminal financial flows should be stopped.",
      sub1: "The committees are concerned with preventing crypto transactions with a criminal background. In order to be able to prevent money laundering, for example, crypto payments would have to be linked to people.",
      subh1: "Travel",
      blog: "Pirate Party MEP Patrick Breyer has voted against the report and opposes a total ban on anonymous crypto payments. “A complete ban on anonymous cryptocurrency payments would have no significant impact on crime, but would deprive law-abiding citizens of their financial freedom",
      date1: "/ August 19 2017",
    },
    {
      id: "th98pid30ff84",
      img1: "https://www.businessinsider.in/thumb/msid-90103399,width-700,resizemode-4,imgsize-1015331/investment/bitcoin-ethereum-surge-after-us-treasury-secretary-yellens-leaked-statement-calms-fears-around-bidens-crypto-policy.jpg",
      Heading1: "Bitcoin surges after accidentally released Treasury statement",
      Heading2: "Bitcoin surges after accidentally released Treasury statement",
      sub1: "Prices of Bitcoin and other cryptocurrencies have soared following the apparent accidental release of a U.S. Treasury statement on Biden’s expected executive order on digital assets",
      subh1: "Travel",
      blog: "Biden’s executive order aims to regulate the crypto market while also reaping the benefits of digital currencies. So far, like most countries in the world, the US has tended to react to developments and has limited itself to pointing to a political-economic approach that is yet to be developed.",
      date1: "/ August 19 2017",
    },
    {
      id: "th96pid30ff84",
      img1: "https://hips.hearstapps.com/hmg-prod/images/abstract-robot-sprinting-athlete-bursting-from-royalty-free-image-1571170123.jpg?crop=0.878xw:0.990xh;0.115xw,0&resize=2048:*",
      Heading1: "Running robot sets new speed record",
      Heading2: "Running robot sets new speed record",
      sub1: "The key to success in running robots is adaptability. If they are to move faster and more confidently over different terrains, they will probably need to change their gait and speed whenever obstacles cross their path or the terrain changes.",
      subh1: "Travel",
      blog: "A better approach is to create a robot that can learn through trial and error, and automatically modify and change its behavior and movements as it encounters something new. Researchers at MIT CSAIL developed a robot cheetah that uses artificial intelligence to quickly experience and learn from all the experiences that it encounters since trying to walk for the first time.",
      date1: "/ August 19 2017",
    },
  ],
  food: [
    {
      id: "ft10pid30ff84",
      img1: "https://im.indiatimes.in/content/2022/Mar/Facebook-Image-64_623481b4b7629.jpg?w=725&h=380&cc=1",
      Heading1: "AI designs 40,000 new “chemical weapons” in just 6 hours",
      sub1: "The experiment was carried out by researchers from Collaborations Pharmaceuticals. The company actually uses machine learning to research drugs and new treatment options for rare diseases. As part of the Spiez Convergence, a conference on developments that could impact the biological weapons conventions, the scientists gave their AI a slightly different assignment.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod4pid30ff84",
      img1: "https://www.macworld.com/wp-content/uploads/2021/09/airtag-1.jpg?resize=1200%2C799&quality=50&strip=all",
      Heading1: "Hacker: Airtag without tracking warning",
      sub1: "A hacker was able to track a person unnoticed for five days with a replica Airtag. The hacker wants to point out security problems with Apple’s Airtag.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod5pid30ff84",
      img1: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fb1205410-973a-11ec-bcb9-65f2c5c7f961.jpg?crop=1142%2C642%2C0%2C59&resize=1500",
      Heading1: "Roman Abramovich is giving up Chelsea",
      sub1: "Roman Abramovich is no longer in charge at Chelsea. ” I have always taken decisions with the Club’s best interest at heart,” said the billionaire in a statement released by the club. The Russian continues: “I remain committed to these values. That is why I am today giving trustees of Chelsea’s charitable Foundation the stewardship and care of Chelsea FC.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod6pid30ff84",

      img1: "https://pbs.twimg.com/media/FMwpt7MXwAMdiFd?format=png&name=small",
      Heading1: "New channel tracks private jets of Russian oligarchs",
      sub1: "Many European countries have closed their airspace to Russian aircraft. Outside of Europe, Canada also joined these restrictions. Canadian airspace is considered very important due to its size",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod7pid30ff84",

      img1: "https://ichef.bbci.co.uk/news/976/cpsprodpb/8B6B/production/_123519653_zaporizhzhyav4_2x-nc.png.webp",
      Heading1: "Chernobyl without power. Cooling at risk?",
      sub1: "The site lost power at 11:22 on Wednesday morning local time. Emergency generators can keep safety systems running for another 48 hours. Ongoing combat operations are making repair impossible, reads a statement by Energoatom on Telegram.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod8pid30ff84",

      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/600px-Coronavirus._SARS-CoV-2.png",
      Heading1: "Forged vaccine passport: Father kills family for fear of prison",
      sub1: "According to a suicide letter left behind, the 40-year-old forged a vaccination certificate for his wife. After the employer found out, the couple was afraid of imprisonment and that the children would be taken away from them, the Chief Public Prosecutor Gernot Bantleon told the German Press Agency on Tuesday. He did not provide any further details. The investigators found the letter in the family home.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "fod9pid30ff84",

      img1: "https://images.news18.com/ibnlive/uploads/2022/01/novak-djokovic-16413747733x2.jpg?impolicy=website&width=510&height=356",
      Heading1: "Australia: Tennis star Djokovic deported. Serbia’s president furious",
      sub1: "World No. 150 Salvatore Caruso (29) will replace Djokovic as a so-called lucky loser. He will play against the Serb Miomir Kecmanovic in the first round, according to the updated schedule for Monday.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
  fitness: [
    {
      id: "fod10pid30ff84",
      img1: "https://cdn.decrypt.co/resize/1536/wp-content/uploads/2022/02/cryptopunks-5822-record-sale-gID_7.png.webp",
      Heading1: "CryptoPunk NFT sold for almost $24 million",
      sub1: "The CryptoPunks have been around since 2017. They can rightly call themselves co-founders of the NFT hype. They were the first at a time when there were no more NFTs. The optically rudimentary profile picture collection thus has legendary status.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft4pid30ff84",
      img1: "https://www.thesun.co.uk/wp-content/uploads/2021/11/NINTCHDBPICT000689607900.jpg?w=620",
      Heading1: "Director of the DNI hints possible “alien link” to UFOs",
      sub1: "The main issues that Congress and others have been concerned about is safety of flight concerns and counterintelligence issues. Always there’s also the question of ‘is there something else that we simply do not understand, which might come extraterrestrially?",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft5pid30ff84",
      img1: "https://s.abcnews.com/images/Politics/ufo-dod-navy-gty-jt-210604_1622833615977_hpMain_16x9_992.jpg",
      Heading1: "SwiPentagon: New UFO investigation unit to replace Navy groupmming",
      sub1: "Deputy Secretary of Defense Kathleen Hicks, in close collaboration with the Director of National Intelligence, directed the Under Secretary of Defense for Intelligence & Security to establish within the Office of the USD(I&S) the “Airborne Object Identification and Management Synchronization Group (AOIMSG)” as the successor to the U.S. Navy’s “Unidentified Aerial Phenomena Task Force",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft6pid30ff84",
      img1: "https://www.joinindiannavy.gov.in/images/home_banner/home_banner_1.jpg",
      Heading1: "Pentagon: New UFO investigation unit to replace Navy group",
      sub1: "The AOIMSG will synchronize efforts across the Department and the broader U.S. government to detect, identify and attribute objects of interests in Special Use Airspace (SUA), and to assess and mitigate any associated threats to safety of flight and national security.  To provide oversight of the AOIMSG, the Deputy Secretary also directed the USD(I&S) to lead an Airborne Object Identification and Management Executive Council (AOIMEXEC) to be comprised of DoD and Intelligence Community membership, and to offer a venue for U.S. government interagency representation. ",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft7pid30ff84",
      img1: "https://static01.nyt.com/images/2021/12/09/multimedia/00xp-suicidepods-01/00xp-suicidepods-01-jumbo.jpg?quality=75&auto=webp",
      Heading1: "3D-printed suicide pods are now legal in Switzerland",
      sub1: "In 2020, around 1300 people died in Switzerland through euthanasia. They were cared for by the two largest euthanasia organizations in the country: Exit (no connection to Exit International) and Dignitas. The current common method is the ingestion of liquid sodium pentobarbital. After taking the drug, the person falls asleep within two to five minutes before slipping into a deep coma and dying soon after.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft8pid30ff84",

      img1: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1279090508/image_1279090508.jpg?io=getty-c-w640",
      Heading1: "Regeneron says single dose of drug cut risk of COVID-19 by 81.6%",
      sub1: "Regeneron Pharmaceuticals today announced the results from a Phase 3 trial jointly run with the National Institute of Allergy and Infectious Diseases (NIAID), which assessed the use of a single dose of investigational REGEN-COV, a monoclonal antibodies drug, to prevent COVID-19 in uninfected individuals.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
    {
      id: "ft9pid30ff84",
      img1: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/10/thumbs/800x531/158678.jpg?v=1636631183",
      Heading1: "Creditor prepares bankruptcy proceedings against Evergrande",
      sub1: "China Evergrande Group, the second-largest real estate developer in China, defaulted on interest payments on two bonds back in September, with the 30-day grace period still ending in October. However, shortly before the end of the grace period, the public was misled by rumors about alleged interest payments.",
      subh1: "Travel",
      date1: "/ August 19 2022",
    },
  ],
};

export const NewsContext = createContext(initialState);

const NewsProvider = ({ children }) => {
  return (
    <NewsContext.Provider value={initialState}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;