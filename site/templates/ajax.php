<?php
if(kirby()->request()->ajax()) {
	$pageMaster = page($uri);
	$page = $pageMaster->content($lang);
	$site = site();
	?>

<?php if ($pageMaster->content()->name() == "index"): ?>
	
	<?php if(!$page->bg()->empty()):?>
		<div class="background" style="background-image: url('<?php echo $page->bg()->toFile()->bw()->url() ?>')">
			<div class="vignet"></div>
		</div>
	<?php endif ?>

	<section class="content">

		<div class="container">

			<?php $sitePages = page('pages')->children()->visible() ?>
			<div class="pages">
				<?php foreach ($sitePages as $key => $p): ?>
					<div class="page-title">
						<a href="<?php echo $p->url() ?>" data-title="<?php echo $p->title()->html() ?>" data-target="<?php echo $p->uri() ?>">
							<h2><?php echo $p->title()->html() ?></h2>
						</a>
					</div>
				<?php endforeach ?>
			</div>

		</div>

		<div class="container partners">

			<h3><?php echo l::get('partners') ?></h3>
			<ul id="partners">
				<?php foreach($page->partners()->toStructure() as $key => $partner): ?>
					<li class="partner">
						<a href="<?php echo $partner->link() ?>" target="_blank">
							<img src="<?php echo $partner->image()->toFile()->width(500)->url() ?>" alt="<?php echo $partner->name()->html() ?>" width="auto" height="auto">
						</a>
					</li>
				<?php endforeach ?>
			</ul>
		</div>

	</section>

<?php else: ?>

	<?php if(!$page->bg()->empty()):?>
		<div class="background" style="background-image: url('<?php echo $page->bg()->toFile()->bw()->url() ?>')">
			<div class="vignet"></div>
		</div>
	<?php endif ?>

	<section class="content">

		<div class="container title">
			<h1><?php echo $page->title()->html() ?></h1>
		</div>

		<div class="container">
			<?php echo $page->text()->kt() ?>
		</div>

		<div class="close-btn">
		<a href="<?php echo page('index')->url($lang) ?>" data-title="<?php echo page('index')->title()->html() ?>" data-target="index">
			<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
			<style type="text/css">
				.st0{clip-path:url(#SVGID_2_);fill:#CACCC9;}
			</style>
			<g>
				<defs>
					<rect id="SVGID_1_" width="25" height="25"/>
				</defs>
				<clipPath id="SVGID_2_">
					<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
				</clipPath>
				<rect x="-5" y="12.3" transform="matrix(0.7071 0.7071 -0.7071 0.7071 12.5004 -5.1776)" class="st0" width="35" height="0.3"/>
				<rect x="12.3" y="-5" transform="matrix(0.7056 0.7086 -0.7086 0.7056 12.5372 -5.1774)" class="st0" width="0.3" height="35"/>
			</g>
		</svg>
		</a>
	</div>

</section>

<?php endif ?>

<?php
}
else {
	header::status('404');
}