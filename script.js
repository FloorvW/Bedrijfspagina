const menu ={
    antipasti: "antipasti",
    insalate: "insalate",
    secondi: "secondi",
    pasta: "pasta",
    risotto: "risotto",
    dessert: "dessert" 
};

    function showMenu(active) {
        for (choice in menu){
            var el = document.getElementById(choice);
            el.classList.remove('focus');
        }
        switch (active){
            case menu.antipasti:
                document.getElementById("kaart").innerHTML = antipastiText;
                break;
                case menu.insalate:
                document.getElementById("kaart").innerHTML = insalateText;
                break;
                case menu.secondi:
                document.getElementById("kaart").innerHTML = secondiText;
                break;
                case menu.pasta:
                document.getElementById("kaart").innerHTML = pastaText;
                break;
                case menu.risotto:
                document.getElementById("kaart").innerHTML = risottoText;
                break;
                case menu.dessert:
                document.getElementById("kaart").innerHTML = dessertText;
                break;
        }
        
        var el = document.getElementById(active);
        el.classList.add("focus");
    }
    showMenu(menu.antipasti)

    function popup(){
        alert("Bedankt voor je reservering. We zien je graag in ons restaurant!")
    }