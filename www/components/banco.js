//ações de mudança de tela
$(document).on("click","#listar",function()
{
  $(location).attr("href","listar.html");
});
// ações de banco
$(document).on("click","#salvar",function()
{
    var parametros = 
    {
      "nome":$("#nome").val(),
      "senha":$("#senha").val(),
      "email":$("#email").val()
    }

    $.ajax
    ({
      type:"post", //como vou enviar os dados
      url:"https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php", // para onde
      data:parametros, //o que vou enviar

      //se der certo
      success: function(data)
      {
        navigator.notification.alert(data);
        $("#nome").val(""),
        $("#senha").val(""),
        $("#email").val("")
      },

      //se der errado
      error: function(data)
      {
        navigator.notification.alert("ERRO NO CADASTRO");
      }
    })
});

function listar()
{
  $.ajax
  ({
      type:"post",
      url:"https://wordpress-online-2.000webhostapp.com/webservice/listar.php",
      dataType:"json", //o que vou receber, ou como vou receber

      success: function(data)
      {
        var itemlista = "";
        $.each(data.pessoas, function(i,dados)
        {
          itemlista += "<option value = " + dados.codigo + ">" + dados.nome + "</option>";
        });
        $("#listaPessoas").html(itemlista);
      },

      error: function(data)
      {
        navigator.notification.alert("ERRO AO BUSCAR REGISTRO");
      }
  });
}

$(document).on("change","#listaPessoas", function()
{
  var parametro = 
  {
    
  }
});