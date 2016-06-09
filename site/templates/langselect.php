<?php snippet('header') ?>

<section class="content langselect">
	<div class="container">
		<?php snippet('logo') ?>
	</div>
	<div class="container">
		<nav class="languages" role="navigation">
			<ul>
				<?php foreach($site->languages() as $language): ?>
					<li<?php e($site->language() == $language, ' class="active"') ?>>
					<a href="<?php echo $pages->find('index')->url($language->code()) ?>" data-title="<?php echo $pages->find('index')->title($language->code()) ?>" data-target="page">
						<h3><?php echo html($language->name()) ?></h3>
					</a>
				</li>
			<?php endforeach ?>
		</ul>
	</nav>
</div>
</section>

<?php snippet('footer') ?>