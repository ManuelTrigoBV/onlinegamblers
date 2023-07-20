/* RAW Data for testing */
const data = {
  'What is online gambling?':
    'Online gambling refers to using the internet to participate in games of chance or place bets on various events, such as casino games, sports, or other forms of gambling. It involves accessing gambling websites or online casinos to wager and potentially win money or prizes.',
  'Is it safe to gamble online?':
    "The safety of online gambling depends on various factors, such as the reputation and legitimacy of the gambling site, adherence to responsible gambling practices, and the user's own responsible behavior. It is crucial to choose licensed and regulated gambling sites, use secure payment methods, and gamble responsibly to mitigate potential risks.",
  'What are the best online gambling sites?':
    'Determining the "best" online gambling sites can depend on personal preferences and specific requirements. However, based on the research we have conducted over different factors like game variety, user experience, customer support, and safety, we recommend BetUS, Bovada & MyBookie.',
  'Is online gambling legal in USA?':
    'Online gambling regulations in the United States vary by state. While some states have legalized and regulated online gambling, others have strict laws prohibiting it. It is important to research and understand the specific laws and regulations of your state to determine the legality of online gambling in your jurisdiction.',
  'Can I gamble for real money online?':
    'Yes, you can gamble for real money online. Online gambling sites provide opportunities to wager real money on various casino games, sports betting, poker, and other forms of gambling. However, it’s important to ensure that you are of legal age and comply with the laws and regulations of your jurisdiction regarding online gambling for real money. Additionally, it is crucial to gamble responsibly and set limits on your spending.',
  'How popular is online gambling?':
    'Online gambling has experienced significant popularity and growth in recent years. It has become a widespread form of entertainment and has attracted a large number of players worldwide. The convenience of accessing gambling platforms from anywhere with an internet connection, the wide range of games available, and the advancements in technology have contributed to the increasing popularity of online gambling. However, specific popularity figures and trends can vary depending on regions and individual preferences.',
  'Can I gamble on my mobile device?':
    'Yes, you can gamble on your mobile device. Many online gambling sites offer mobile-friendly platforms or dedicated mobile apps that allow you to access a wide range of casino games, sports betting, and other gambling activities directly from your smartphone or tablet. Mobile gambling provides convenience and flexibility, allowing you to enjoy your favorite games on the go. Just ensure that you have a stable internet connection to have a seamless mobile gambling experience.',
}

/* DOM Elements */
const faqsContainer = document.getElementById('faq-section-container')

/* Window event listener - when loading the page to append the faq */
window.addEventListener('load', () => {
  //appendFaq("What is online gaming?", "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  let keys = Object.keys(data)
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    let question = keys[i]
    if (i === 0) {
      console.log('hyes')
      appendFaq(question, data[question], true)
    } else {
      appendFaq(question, data[question], false)
    }
  }
})

function appendFaq(question, answer, special) {
  /* Boolean logic */
  let isOpened = false

  /* Creating the FAQ container */
  const faqContainer = document.createElement('div')
  faqContainer.className = 'faq-container w-100'
  /* ============================ */

  /* Creating the "tile and button container" */
  const titleAndButtonContainer = document.createElement('div')
  titleAndButtonContainer.className =
    'title-and-button-container w-100 d-flex overflow-hidden position-relative'

  /* Creating the "div" containing the question text */
  const textTitleContainer = document.createElement('div')
  textTitleContainer.className =
    'col-9 d-flex h-100 align-items-center justify-content-start'

  /* Creating the question text element */
  const questionTextElement = document.createElement('h3')
  questionTextElement.className = 'my-auto'
  questionTextElement.textContent = question

  /* Appending the question text to the question "div" */
  textTitleContainer.appendChild(questionTextElement)

  /* Appending the question section to the "title and button container" */
  titleAndButtonContainer.appendChild(textTitleContainer)

  /* Creating the "div" containing the image button */
  const imageContainer = document.createElement('div')
  imageContainer.className =
    'col-3 d-flex h-100 align-items-center justify-content-end'

  /* Creating the image "button" */
  const image = document.createElement('img')
  image.src = './assets/next.png'

  /* Creating the function for clicking the "image button" and opening the answer */
  image.onclick = () => {
    if (isOpened) {
      faqContainer.classList.remove('active-faq')
      answerContainer.className = 'answer-content d-none w-100'
      image.classList.remove('active-faq-image')
      isOpened = false
      localStorage.setItem('openedQuestion', question)
      //openingFaqs(question);
    } else {
      faqContainer.classList.add('active-faq')
      answerContainer.className = 'answer-content d-block w-100'
      image.classList.add('active-faq-image')
      isOpened = true
      localStorage.setItem('openedQuestion', '')
    }
  }

  /* Appending the image to the "div" containing it */
  imageContainer.appendChild(image)

  /* Appending the image section to the "title and button container" */
  titleAndButtonContainer.appendChild(imageContainer)

  /* Appending the "title and button container" to the main FAQ container */
  faqContainer.appendChild(titleAndButtonContainer)

  /* Creating the answer container */
  const answerContainer = document.createElement('div')
  answerContainer.className = 'answer-content d-none w-100'

  /* Creating the answer text element */
  const answerTextElement = document.createElement('p')
  answerTextElement.textContent = answer

  /* Appending the answer text to the answer container */
  answerContainer.appendChild(answerTextElement)

  if (special === true) {
    faqContainer.classList.add('active-faq')
    answerContainer.className = 'answer-content d-block w-100'
    image.classList.add('active-faq-image')
    isOpened = true
  }

  /* Appending the answer container to the main FAQ container */
  faqContainer.appendChild(answerContainer)

  /* Finally appending the main FAQ container to the FAQs container */
  faqsContainer.appendChild(faqContainer)
}

/* Function for opening one faq and closing others */

/* function openingFaqs(question) {
  faqsContainer.innerHTML = "";
  let keys = Object.keys(data);
  for (let key in data) {
    if (key === question) {
      appendFaq(question, data[key], true);
    } else {
      appendFaq(question, data[key], false);
    }
  }
} */

/* Casino Tabs Logic */

const casinosButton = document.getElementById('casino-games-btn')
const sportsButton = document.getElementById('sports-games-btn')
const pokerButton = document.getElementById('poker-games-btn')

const casinosContainer = document.getElementById('casino-games-content')
const sportsContainer = document.getElementById('sports-games-content')
const pokerContainer = document.getElementById('poker-games-content')

casinosButton.onclick = () => {
  casinosButton.classList.add('active-btn')
  sportsButton.classList.remove('active-btn')
  pokerButton.classList.remove('active-btn')

  casinosContainer.className = 'casino-games-container d-block h-100'
  sportsContainer.className = 'casino-games-container d-none h-100'
  pokerContainer.className = 'casino-games-container d-none h-100'
}

sportsButton.onclick = () => {
  casinosButton.classList.remove('active-btn')
  sportsButton.classList.add('active-btn')
  pokerButton.classList.remove('active-btn')

  casinosContainer.className = 'casino-games-container d-none h-100'
  sportsContainer.className = 'casino-games-container d-block h-100'
  pokerContainer.className = 'casino-games-container d-none h-100'
}

pokerButton.onclick = () => {
  casinosButton.classList.remove('active-btn')
  sportsButton.classList.remove('active-btn')
  pokerButton.classList.add('active-btn')

  casinosContainer.className = 'casino-games-container d-none h-100'
  sportsContainer.className = 'casino-games-container d-none h-100'
  pokerContainer.className = 'casino-games-container d-block h-100'
}

/* ==================== */
