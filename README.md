# SimpleGalleryShow

Simples galeria de imagem para pequenos projetos.

1° passo <br />
definir a lista de thumbnails com link para a imagem maior:
```bash
<ul class="thumbs">
	<li>
		<a href="{IMAGEM GRANDE}">
			<img src="{THUMBNAIL}" alt="{ALT DA IMAGEM}" />
		</a>
	</li>
</ul>
```

2° passo <br />
definir a DIV onde será exibido a imagem maior:
```bash
<div class="content-gallery"></div>
```

3° passo <br />
chamar a função:
```bash
$(document).ready(function(){
	$(".thumbs").SimpleGalleryShow();
});

Onde thumbs refere-se a lista com as miniaturas
```

#Parâmetros
```bash
delay (default 200)
interval (default 2000)
```

