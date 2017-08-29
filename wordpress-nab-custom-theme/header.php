<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>		
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<meta description="<?php bloginfo('description'); ?>">

		<link rel="icon" type="image/x-icon" href="favicon.ico">
		<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/assets/vendor/normalize/normalize.css" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/assets/vendor/foundation/css/foundation.min.css" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/styles.0308c1ab632a63fb2fe1.bundle.css" rel="stylesheet"/>

		<?php wp_head(); ?>

		<title>Welcome to North American Business College</title>
		
		<base href="/">
	</head>