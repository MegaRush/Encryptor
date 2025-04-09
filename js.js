var zashifr = true

function clearing() {
    const clearText = document.getElementById("input");
    clearText.value = "";
}
 
function enRus(){
    zashifr = true;

    var styles1 = document.getElementById("but1");
    var styles2 = document.getElementById("but2");

    styles1.style.backgroundColor = 'rgb(8, 228, 0)';
    styles1.style.border = '2px solid rgb(7, 214, 0)';
    styles2.style.backgroundColor = 'rgb(228, 225, 225)';
    styles2.style.border = '2px solid rgb(228, 225, 225)';
}

function rusEn(){
    zashifr = false;

    var styles1 = document.getElementById("but1");
    var styles2 = document.getElementById("but2");

    styles2.style.backgroundColor = 'rgb(8, 228, 0)';
    styles2.style.border = '2px solid rgb(7, 214, 0)';
    styles1.style.backgroundColor = 'rgb(228, 225, 225)';
    styles1.style.border = '2px solid rgb(228, 225, 225)';
}

function shifr(){
    var zag = document.getElementById("runzag");
    zag.textContent =  "Зашифровка";
    zashifr = true;

    var styles1 = document.getElementById("but1");
    var styles2 = document.getElementById("but2");

    styles1.style.backgroundColor = 'rgb(8, 228, 0)';
    styles1.style.border = '2px solid rgb(7, 214, 0)';
    styles2.style.backgroundColor = 'rgb(228, 225, 225)';
    styles2.style.border = '2px solid rgb(228, 225, 225)';
}

function unshifr(){
    var zag = document.getElementById("runzag");
    zag.textContent = "Расшифровка" ;
    zashifr = false;

    var styles1 = document.getElementById("but1");
    var styles2 = document.getElementById("but2");

    styles2.style.backgroundColor = 'rgb(8, 228, 0)';
    styles2.style.border = '2px solid rgb(7, 214, 0)';
    styles1.style.backgroundColor = 'rgb(228, 225, 225)';
    styles1.style.border = '2px solid rgb(228, 225, 225)';
}

function runShifr(){
    if(zashifr === true){     
        var input = document.getElementById("input").value;
        if(input === "sigma1000-7"){
            alert("ок")
            window.location.href = "info.html";
        }
        var result = input
            .replace(/а/gi, 'zov')
            .replace(/б/gi, 'dxv')
            .replace(/в/gi, 'uyt')
            .replace(/г/gi, 'kjh')
            .replace(/д/gi, 'nmb')
            .replace(/е/gi, 'cdz')
            .replace(/ё/gi, 'ppa')
            .replace(/ж/gi, 'dbf')
            .replace(/з/gi, 'jur')
            .replace(/и/gi, 'hrt')
            .replace(/й/gi, 'plk')
            .replace(/к/gi, 'bng')
            .replace(/л/gi, 'lse')
            .replace(/м/gi, 'nvx')
            .replace(/н/gi, 'yqw')
            .replace(/о/gi, 'kir')
            .replace(/п/gi, 'lop')
            .replace(/р/gi, 'nej')
            .replace(/с/gi, 'sol')
            .replace(/т/gi, 'nqp')
            .replace(/у/gi, 'jes')
            .replace(/ф/gi, 'qwe')
            .replace(/х/gi, 'pav')
            .replace(/ц/gi, 'gow')
            .replace(/ч/gi, 'bvg')
            .replace(/ш/gi, 'shr')
            .replace(/щ/gi, 'mwl')
            .replace(/ъ/gi, 'kxt')
            .replace(/ы/gi, 'prv')
            .replace(/ь/gi, 'ghq')
            .replace(/э/gi, 'lat')
            .replace(/ю/gi, 'rgv')
            .replace(/я/gi, 'gpk')
        
        document.getElementById("input").value = result
    }

    if(zashifr === false){
        var input = document.getElementById("input").value;
        if(input === "sigma1000-7"){
            alert("ок")
            window.location.href = "info.html";
        }
        var result = input
            .replace(/zov/gi, 'а')
            .replace(/dxv/gi, 'б')
            .replace(/uyt/gi, 'в')
            .replace(/kjh/gi, 'г')
            .replace(/nmb/gi, 'д')
            .replace(/cdz/gi, 'е')
            .replace(/ppa/gi, 'ё')
            .replace(/dbf/gi, 'ж')
            .replace(/jur/gi, 'з')
            .replace(/hrt/gi, 'и')
            .replace(/plk/gi, 'й')
            .replace(/bng/gi, 'к')
            .replace(/lse/gi, 'л')
            .replace(/nvx/gi, 'м')
            .replace(/yqw/gi, 'н')
            .replace(/kir/gi, 'о')
            .replace(/lop/gi, 'п')
            .replace(/nej/gi, 'р')
            .replace(/sol/gi, 'с')
            .replace(/nqp/gi, 'т')
            .replace(/jes/gi, 'у')
            .replace(/qwe/gi, 'ф')
            .replace(/pav/gi, 'х')
            .replace(/gow/gi, 'ц')
            .replace(/bvg/gi, 'ч')
            .replace(/shr/gi, 'ш')
            .replace(/mwl/gi, 'щ')
            .replace(/kxt/gi, 'ъ')
            .replace(/prv/gi, 'ы')
            .replace(/ghq/gi, 'ь')
            .replace(/lat/gi, 'э')
            .replace(/rgv/gi, 'ю')
            .replace(/gpk/gi, 'я')
        
        document.getElementById("input").value = result
    }
}

function runCens(){
    var input = document.getElementById("input").value;
    if(input === "sigma1000-7"){
        alert("Дальше онли факты!")
        window.location.href = "info.html";
    }
    var result = input
    .replace(/а/gi, 'α')
    .replace(/б/gi, 'δ')
    .replace(/в/gi, 'ϐ')
    .replace(/г/gi, 'ґ')
    .replace(/д/gi, 'ⲇ')
    .replace(/е/gi, 'ε')
    .replace(/ё/gi, 'ɛ')
    .replace(/ж/gi, 'ѭ')
    .replace(/з/gi, 'ӡ')
    .replace(/и/gi, 'μ')
    .replace(/й/gi, 'ҋ')
    .replace(/к/gi, 'ҝ')
    .replace(/л/gi, 'λ')
    .replace(/м/gi, 'ӎ')
    .replace(/н/gi, 'ӈ')
    .replace(/о/gi, 'ѻ')
    .replace(/п/gi, 'π')
    .replace(/р/gi, 'ρ')
    .replace(/с/gi, 'ϲ')
    .replace(/т/gi, 'τ')
    .replace(/у/gi, 'γ')
    .replace(/ф/gi, 'ɸ')
    .replace(/х/gi, '✗')
    .replace(/ц/gi, 'ų')
    .replace(/ч/gi, 'ɥ')
    .replace(/ш/gi, 'ⲱ')
    .replace(/щ/gi, 'ψ')
    .replace(/ъ/gi, '⁊')
    .replace(/ы/gi, 'ƅɩ')
    .replace(/ь/gi, '¿')
    .replace(/э/gi, '€')
    .replace(/ю/gi, 'ю')
    .replace(/я/gi, 'ꤎ')
    .replace(/αε/gi, 'Æ')
    .replace(/ϲε/gi, 'ɶ')
    .replace(/ѻε/gi, 'œ')
    .replace(/αε/gi, 'Æ')
        
    document.getElementById("input").value = result
}

function runLay(){
    if(zashifr === true){     
        var input = document.getElementById("input").value;
        if(input === "sigma1000-7"){
            alert("ок")
            window.location.href = "info.html";
        }
        var result = input
        .replace(/f/gi, 'а')
        .replace(/,/gi, 'б')
        .replace(/d/gi, 'в')
        .replace(/u/gi, 'г')
        .replace(/l/gi, 'д')
        .replace(/t/gi, 'е')
        .replace(/`/gi, 'ё')
        .replace(/;/gi, 'ж')
        .replace(/p/gi, 'з')
        .replace(/b/gi, 'и')
        .replace(/q/gi, 'й')
        .replace(/r/gi, 'к')
        .replace(/k/gi, 'л')
        .replace(/v/gi, 'м')
        .replace(/y/gi, 'н')
        .replace(/j/gi, 'о')
        .replace(/g/gi, 'п')
        .replace(/h/gi, 'р')
        .replace(/c/gi, 'с')
        .replace(/n/gi, 'т')
        .replace(/e/gi, 'у')
        .replace(/a/gi, 'ф')
        .replace(/\[/gi, 'х')
        .replace(/w/gi, 'ц')
        .replace(/x/gi, 'ч')
        .replace(/i/gi, 'ш')
        .replace(/o/gi, 'щ')
        .replace(/]/gi, 'ъ')
        .replace(/s/gi, 'ы')
        .replace(/m/gi, 'ь')
        .replace(/'/gi, 'э')
        .replace(/\./gi, 'ю')
        .replace(/z/gi, 'я')
        
        document.getElementById("input").value = result
    }

    if(zashifr === false){
        var input = document.getElementById("input").value;
        if(input === "sigma1000-7"){
            alert("ок")
            window.location.href = "info.html";
        }
        var result = input
        .replace(/а/gi, 'f')
        .replace(/б/gi, ',')
        .replace(/в/gi, 'd')
        .replace(/г/gi, 'u')
        .replace(/д/gi, 'l')
        .replace(/е/gi, 't')
        .replace(/ё/gi, '`')
        .replace(/ж/gi, ';')
        .replace(/з/gi, 'p')
        .replace(/и/gi, 'b')
        .replace(/й/gi, 'q')
        .replace(/к/gi, 'r')
        .replace(/л/gi, 'k')
        .replace(/м/gi, 'v')
        .replace(/н/gi, 'y')
        .replace(/о/gi, 'j')
        .replace(/п/gi, 'g')
        .replace(/р/gi, 'h')
        .replace(/с/gi, 'c')
        .replace(/т/gi, 'n')
        .replace(/у/gi, 'e')
        .replace(/ф/gi, 'a')
        .replace(/х/gi, '[')
        .replace(/ц/gi, 'w')
        .replace(/ч/gi, 'x')
        .replace(/ш/gi, 'i')
        .replace(/щ/gi, 'o')
        .replace(/ъ/gi, ']')
        .replace(/ы/gi, 's')
        .replace(/ь/gi, 'm')
        .replace(/э/gi, '\'')
        .replace(/ю/gi, '.')
        .replace(/я/gi, 'z')
        
        document.getElementById("input").value = result
    }
}

function toggleNavPanel(menuButton){
    var navPanel = document.getElementById("navPanel");
    
    navPanel.classList.toggle("open");
    menuButton.classList.toggle("open");
}

function copy() {
    const inputField = document.getElementById('input');
    inputField.select();
    navigator.clipboard.writeText(inputField.value).then(function() {
    }, function(err) {
        console.error('Ошибка при копировании: ', err);
    });
};
