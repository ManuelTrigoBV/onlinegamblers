/* RAW Data for testing */
const data = {
  'What is online gaming?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Is it safe to gamble online?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'What are the best online gambling sites?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Is online gambling legal in USA?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Can I play online casino games for free?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Can I gamble for real money online?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'How popular is online gambling?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Can I gamble on my mobile device?':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}

/* DOM Elements */
const faqsContainer = document.getElementById('faq-section-container')

/* Window event listener - when loading the page to append the faq */
window.addEventListener('load', () => {
  //appendFaq("What is online gaming?", "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  let keys = Object.keys(data);
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    let question = keys[i];
    if (i === 0) {
      console.log("hyes")
      appendFaq(question, data[question], true)
    } else {
      appendFaq(question, data[question], false)
    }
  }
})

function appendFaq(question, answer, special) {
  /* Boolean logic */
  let isOpened = false;
  
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
  const questionTextElement = document.createElement('h1')
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
    } else {
      faqContainer.classList.add('active-faq')
      answerContainer.className = 'answer-content d-block w-100'
      image.classList.add('active-faq-image')
      isOpened = true
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
