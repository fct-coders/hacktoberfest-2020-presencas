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

const create_contributor_card = (user) => {
  let lang_list = '';
  user.languages.forEach((lang) => {
    lang_list += `<li class="lang">${lang}</li>`;
  });
  const cardHTML = `
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
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
