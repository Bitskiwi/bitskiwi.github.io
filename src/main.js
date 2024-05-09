function alert_trap(prompt: string): void {
    while(1){
        if(alert(prompt)){
            break;
        } else {
            continue;
        }
    }
}

var vim_trap = document.getElementById("vim_button");
vim_trap.addEventListener("click", function() => {
	alert("works");
    alert_trap("Hey buddy! you should use Vim!");
});
