const CATFACT_NINJA_API = "https://catfact.ninja/fact";
const random_sentence = document.getElementById("api_sentence");
// console.log(random_sentence);

function btnClick(){
RenderRandomSentence();
}

function GetApiSentence(){
  return fetch(CATFACT_NINJA_API)
  .then((response) => response.json())
  .then(
    (data) =>
    // console.log(data.fact)
    data.fact
  );
}

async function RenderRandomSentence(){
  const sentence = await GetApiSentence();
  // console.log(sentence)
  random_sentence.textContent = sentence;
}