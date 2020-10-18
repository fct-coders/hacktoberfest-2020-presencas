//import contributors from "./data/_contributors.json"

const API_URL = 'https://api.github.com/users/';

const contributor_section = document.getElementById('section-contributors');

//const contributors = [
//  {
//    username: 'deadpyxel',
//    about: 'Hacktoberfest boys',
//    languages: ['Python', 'Go', 'Rust'],
//    year: '2012',
//  },
//];

const get_user_data = async (username) => {
  const resp = await fetch(API_URL + username);
  return await resp.json();
};

const make_contributor = async (user) => {
  const user_data = await get_user_data(user.username);
  const contributor = {
    ...user,
    avatar_url: user_data.avatar_url,
    name: user_data.name,
  };
  return contributor;
};


const linguagens = ["c","cpp","csharp","css","go", "html", "java", "javascript", "kotlin", "lua", "php", "python", "r", "ruby", "swift", "typescript"];

const create_contributor_card = (user) => {
  let lang_list = '';
 
// Revertemos a ordem da string, pois, talvez o usuário coloque as linguagens em uma ordem de acordo com seu nível de habilidade.
// A maneira com que lidamos com a lista de linguagens abaixo, inverteria a ordem das linguagens.
  user.languages.reverse().forEach((lang) => {
	let lang_store = lang;
	lang_store = lang_store.toLowerCase()
	 
	if (lang_store == 'js') {
		lang_store = 'javascript';
	}
	  
	if (lang_store == 'c++') {
		lang_store = 'cpp';
	}
	  
	if (lang_store == 'c#') {
		lang_store = 'csharp';
	}
	  
	if (linguagens.includes(lang_store)) {
	  
      lang_list = '<li class="lang"><img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/' + lang_store + '/' + lang_store + '.svg" style="width: 30px"></li>' + lang_list;
		  }
	  else if (lang_store == 'rust'){
		  lang_list = '<li class="lang"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" style="width: 30px"</li>' + lang_list
	  }
	  
	  else if (lang_store == 'react'){
		  lang_list = '<li class="lang"><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" style="width: 30px"</li>' + lang_list
	  }
	  
	  // Por questões estéticas, adicionamos a linguagem sem imagem no final da lista
	  else {
		  lang_list += `<li class="lang">${lang_store}</li>`
		  }
  });
	
  const cardHTML = `
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
            </div>
            <div class="user-info">
                <h2>${user.name || user.username}</h2>
                <p>"${user.about}"</p>
                <p>Ano: ${user.year}</p>

                <ul class="languages">
                  ${lang_list}
                </ul>
            </div>
    `;
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = cardHTML;
  contributor_section.appendChild(card);
};

const list_contributors = () => {
  fetch('./data/_contributors.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach(async (contributor) => {
        let contrib = await make_contributor(contributor);
        create_contributor_card(contrib);
      });
    });
};

list_contributors();
