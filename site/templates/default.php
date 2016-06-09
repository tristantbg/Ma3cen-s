<?php snippet('header') ?>

<?php $about = $pages->find('about') ?>

<section class="intro">
	<?php snippet('logo') ?>
</section>

<div class="about">
		<a data-title="<?php echo $about->title()->html() ?>" href="<?php echo $about->url() ?>" data-target="about">
			<?php echo $about->title()->html() ?>
		</a>
	</div>

<?php snippet('page-header') ?>

<?php echo $about->text()->kt() ?>

<?php snippet('page-footer') ?>

<?php snippet('footer') ?>
