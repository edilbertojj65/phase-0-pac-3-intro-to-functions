// Follow along with the examples here

function weCanDo(name, age , message ) {

    let isAdult=false, canWork=false, canEnlist=false, canDrink=false;

    if (age >= 21) {
        canWork = true;
        canEnlist = true;
        isAdult = true;
        canDrink = true;
        console.log(`${name}`);
        message = ` With: ${age} years, you can drink and work`;

      } else if (age >= 18) {
        canWork = true;
        canEnlist = true;
        isAdult = true;
      } else if (age >= 16) {
        canWork = true;
      }
      return `${message}`;
    }

  console.log(weCanDo("Jhon", "35", ""));