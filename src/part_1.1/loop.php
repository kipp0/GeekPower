<?php include_once('./header.php') ?>
  <main>
    <section>
      <div class="container">
        <div><h1>LOOP</h1></div>
        <div>
          <form class="" action="calc.html" method="post">
            <label>Start Date</label>
            <input type="date" name="day1" id="day1">
            <label>End Date</label>
            <input type="date" name="day2" id="day2">
            <button type="submit" name="submit" value="1">Calculate</button>
          </form>
        </div>
      </div>
      <div id="result" class="container"></div>
    </section>
  </main>
  <script src="./js/loop.js"type="text/javascript"></script>
<?php include_once('./footer.php') ?>
