$(document).ready(function () {
    var days = [
      "Lunes ",
      "Martes",
      "Miércoles",
      "Jueves ",
      "Viernes",
      "Sábado",
      "Domingo",
    ];
    var currentDay = 0;
  
    $(".prev-day").click(function () {
      if (currentDay > 0) {
        currentDay--;
        updateDay(currentDay);
      }
    });
  
    $(".next-day").click(function () {
      if (currentDay < days.length - 1) {
        currentDay++;
        updateDay(currentDay);
      }
    });
  
    function updateDay(day) {
      $(".day-navigation h2").text(days[day]);
  
      switch (day) {
        case 0:
          $(".custom-column p")
            .eq(0)
            .text(
              "Tortilla de 3 huevos, espinacas y queso feta. Tostada de pan integral con aguacate y tomate. Batido de proteína con leche baja en grasa."
            );
          $(".custom-column p")
            .eq(1)
            .text(
              "Pechuga de pollo a la parrilla con arroz integral y ensalada de espinacas y tomates."
            );
          $(".custom-column p")
            .eq(2)
            .text("Batido de proteína con frutas y mantequilla de almendras.");
          $(".custom-column p")
            .eq(3)
            .text("Salmón a la parrilla con patatas asadas y espárragos.");
          break;
        case 1:
          $(".custom-column p")
            .eq(0)
            .text(
              "Batido de proteína con leche baja en grasa, plátano, avena y mantequilla de maní."
            );
          $(".custom-column p")
            .eq(1)
            .text(
              "Hamburguesa de ternera con queso, ensalada de lechuga y tomates, y papas fritas horneadas."
            );
          $(".custom-column p").eq(2).text("Yogur griego con nueces y frutas.");
          $(".custom-column p")
            .eq(3)
            .text("Pollo al horno con arroz integral y brócoli al vapor.");
          break;
        case 2:
          $(".custom-column p")
            .eq(0)
            .text("Tazón de yogur griego con frutas, nueces y granola.");
          $(".custom-column p")
            .eq(1)
            .text(
              "Sándwich de pavo con pan integral, lechuga, tomate y aguacate. Ensalada de frutas."
            );
          $(".custom-column p")
            .eq(2)
            .text(
              "Batido de proteína con leche baja en grasa, frutas y espinacas."
            );
          $(".custom-column p")
            .eq(3)
            .text(
              "Solomillo de cerdo a la parrilla con batatas asadas y ensalada de espinacas."
            );
          break;
        case 3:
          $(".custom-column p")
            .eq(0)
            .text(
              "Tortilla de 3 huevos con pimiento, cebolla y queso cheddar. Tostada de pan integral con aguacate y tomate. Batido de proteína con leche baja en grasa."
            );
          $(".custom-column p")
            .eq(1)
            .text(
              "Pescado a la parrilla con quinoa y ensalada de espinacas y tomates."
            );
          $(".custom-column p")
            .eq(2)
            .text("Batido de proteína con frutas y mantequilla de almendras.");
          $(".custom-column p")
            .eq(3)
            .text(
              "Carne de res a la parrilla con ensalada de espinacas, tomates y pepinos."
            );
          break;
        case 4:
          $(".custom-column p").eq(0).text("Tazón de avena con frutas y nueces.");
          $(".custom-column p")
            .eq(1)
            .text(
              "Salmón a la parrilla con ensalada de espinacas, tomates y aceitunas."
            );
          $(".custom-column p")
            .eq(2)
            .text(
              "Batido de proteína con leche baja en grasa, frutas y mantequilla de almendras."
            );
          $(".custom-column p")
            .eq(3)
            .text("Pollo al horno con arroz integral y ensalada de verduras.");
          break;
        case 5:
          $(".custom-column p")
            .eq(0)
            .text(
              "Batido de proteína con leche baja en grasa, plátano, avena y mantequilla de maní."
            );
          $(".custom-column p")
            .eq(1)
            .text(
              "Hamburguesa vegetariana con ensalada de espinacas, tomates y pepinos, y patatas fritas horneadas."
            );
          $(".custom-column p").eq(2).text("Yogur griego con nueces y frutas.");
          $(".custom-column p")
            .eq(3)
            .text(
              "Ternera a la parrilla con patatas asadas y ensalada de espinacas."
            );
          break;
        case 6:
          $(".custom-column p")
            .eq(0)
            .text("Tazón de yogur griego con frutas, nueces y granola.");
          $(".custom-column p")
            .eq(1)
            .text(
              "Sándwich de jamón y queso con pan integral, lechuga, tomate y mostaza. Ensalada de frutas."
            );
          $(".custom-column p")
            .eq(2)
            .text(
              "Batido de proteína con leche baja en grasa, frutas y espinacas."
            );
          $(".custom-column p")
            .eq(3)
            .text("Pescado al horno con patatas asadas y ensalada de verduras.");
          break;
      }
    }
  });
  