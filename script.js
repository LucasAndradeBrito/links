let box_selection = document.querySelector(".box_selection");
let options_week = document.querySelector(".options_week");
let middle_week = document.querySelector("#middle_week");
let final_week = document.querySelector("#final_week");
let return_option = document.querySelector(".return_option");
let middle_screen = return_option.children[0];
let final_screen = return_option.children[1];

middle_week.addEventListener("click", select_option);
final_week.addEventListener("click", select_option);

function select_option(id) {
  identifier = id.target.id;

  if (identifier == "middle_week") {
    this.classList.add("selected_option");
    final_week.classList.remove("selected_option");
    options_week.classList.add("fadeOut");

    setTimeout(() => {
      options_week.style.display = "none";
      options_week.classList.remove("fadeOut");
      middle_screen.style.display = "flex";
      middle_screen.innerHTML = `
          <div class="msg_link flex">
            <p id='msg_link_middle_week' class="fadeIn">
                *A Congregação Pituaçu está Convidando Você e sua Família para uma Reunião _Zoom_ Agendada.*</br></br>

                _Tópico_: *Reunião Vida e Ministério*</br>
                _Dia_: *Terça-feira às 19:30 horas*</br></br>

                *Para Conectar-se Utilizando o Aplicativo _Zoom_ Clique no Link Abaixo:*</br></br>

                <a href='https://jworg.zoom.us/j/89630245731?pwd=Z1B6WkMvM1pOdE5FL0tCK0FJbEhwdz09'>https://jworg.zoom.us/j/89630245731?pwd=Z1B6WkMvM1pOdE5FL0tCK0FJbEhwdz09</a></br></br>

                *Ou Inicie o Aplicativo _Zoom_ e Insira as Informações Abaixo:*</br></br>

                _ID da reunião_: *896 3024 5731*</br>
                _Senha de acesso_: *200320*</br></br>

                *Você Também Poderá Ouvir a Reunião Discando pelo seu Telefone Fixo ou Móvel para Alguns dos Números Abaixo e Depois Digitando as Informações Solicitadas:*</br></br>

                (11) 4632 2237 Brasil</br>
                (11) 4680 6788 Brasil</br>
                (11) 4700 9668 Brasil</br>
                (21) 3958 7888 Brasil</br>
                (11) 4632 2236 Brasil</br></br>

                *OBS:* O Link deste Convite é Recorrente para Todas as Reuniões, Ou Seja, com Ele Poderá Ingressar nas Reuniões de Meio e Final de Semana.
            </p>
            <div class='btn flex'>
              <button class='btn_menu' onclick='copy("msg_link_middle_week")'>Copiar</button>
              <button class='btn_menu' onclick='menu()' style="margin-left: 10px;">Menu</button>
            </div>
          </div>
            `;
    }, 300);
  } else {
    this.classList.add("selected_option");
    middle_week.classList.remove("selected_option");
    options_week.classList.add("fadeOut");

    setTimeout(() => {
      options_week.style.display = "none";
      options_week.classList.remove("fadeOut");
      final_screen.style.display = "flex";
      final_screen.innerHTML = `
                <div class="box_information flex fadeIn">
                  <h1>Informe os dados</h1>
                  <div class='tema_discurso label-float'
                      ><input id='input_discurso'
                      name="discurso"
                      type="text"
                      placeholder="digitar..."
                      maxlength="50"
                  />
                  <label>Tema do discurso</label>
                  </div>
                  <div class='orador label-float'
                      ><input id='input_orador'
                      name="orador"
                      type="text"
                      placeholder="digitar..."
                      maxlength="25"
                  />
                  <label>Orador</label>
                  </div>
                  <div class='congregação label-float'
                      ><input id='input_congregação'
                      name="congregação"
                      type="text"
                      placeholder="digitar..."
                      maxlength="15"
                  />
                  <label>Congregação</label>
                  </div>
                  <div class='btn flex'>
                    <button class='btn_menu' onclick='generate_link()'>Gerar</button>
                    <button class='btn_menu' onclick='menu()' style="margin-left: 10px;">Menu</button>
                  </div>
                </div>`;
    }, 300);
  }
}

function titleCase(text) {
  text = text.toLowerCase().split(" ");
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].substr(1);
  }
  final_text = text.join(" ");
  return final_text;
}

// Botões

function copy(id) {
  link = document.getElementById(id).textContent;
  navigator.clipboard.writeText(link);
}

function menu() {
  middle_screen.style.display = "none";
  final_screen.style.display = "none";
  options_week.style.display = "flex";
  options_week.classList.add("fadeIn");
  middle_week.classList.remove("selected_option");
  final_week.classList.remove("selected_option");
}

function generate_link() {
  input_discurso = document.getElementById("input_discurso").value;
  input_orador = document.getElementById("input_orador").value;
  input_congregação = document.getElementById("input_congregação").value;

  final_screen.innerHTML = `
  <div class="msg_link flex">
    <p id="msg_link_final_week" class="fadeIn">
      *A Congregação Pituaçu está Convidando Você e sua Família para uma Reunião _Zoom_ Agendada.*</br></br>

      _Tópico_: *Discurso Público e Estudo A Sentinela*</br>
      _Dia_: *Sábado às 19:00 horas*</br>
      _Tema do discurso_: *${titleCase(input_discurso)}*</br>
      _Orador_: *${titleCase(input_orador)}*</br>
      _Congregação_: *${titleCase(input_congregação)}*</br></br>
      
      *Para Conectar-se Utilizando o Aplicativo _Zoom_ Clique no Link Abaixo:*</br></br>
      
      <a href='https://jworg.zoom.us/j/89630245731?pwd=Z1B6WkMvM1pOdE5FL0tCK0FJbEhwdz09'>https://jworg.zoom.us/j/89630245731?pwd=Z1B6WkMvM1pOdE5FL0tCK0FJbEhwdz09</a></br></br>
      
      *Ou Inicie o Aplicativo _Zoom_ e Insira as Informações Abaixo:*</br></br>
      
      _ID da reunião_: *896 3024 5731*</br>
      _Senha de acesso_: *200320*</br></br>
      
      *Você Também Poderá Ouvir a Reunião Discando pelo seu Telefone Fixo ou Móvel para Alguns dos Números Abaixo e Depois Digitando as Informações Solicitadas:*</br></br>
      
      (11) 4632 2237 Brasil</br>
      (11) 4680 6788 Brasil</br>
      (11) 4700 9668 Brasil</br>
      (21) 3958 7888 Brasil</br>
      (11) 4632 2236 Brasil</br></br>
      
      *OBS:* O Link deste Convite é Recorrente para Todas as Reuniões, Ou Seja, com Ele Poderá Ingressar nas Reuniões de Meio e Final de Semana.
    </p>
    <div class='btn flex'>
      <button class='btn_menu' onclick='copy("msg_link_final_week")'>Copiar</button>
      <button class='btn_menu' onclick='menu()' style="margin-left: 10px;">Menu</button>
    </div>
  </div>
 `;
}
