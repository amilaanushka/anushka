<div id="ajax-page" class="ajax-page-content">
    <div class="ajax-page-wrapper">
        <div class="ajax-page-nav">
            <!-- <div class="nav-item ajax-page-prev-next">
                <a class="ajax-page-load" href="portfolio-project-1.html"><i class="lnr lnr-chevron-left"></i></a>
                <a class="ajax-page-load" href="portfolio-project-3.html"><i class="lnr lnr-chevron-right"></i></a>
            </div> -->
            <div class="nav-item ajax-page-close-button">
                <a id="ajax-page-close-button" href="#"><i class="lnr lnr-cross"></i></a>
            </div>
        </div>

        <div class="ajax-page-title">
            <h1>ACCA Content Hub Sri Lanka</h1>
        </div>

        <div class="row">
            <div class="col-sm-8 col-md-8 portfolio-block">
                <div class="owl-carousel portfolio-page-carousel">
                    <div class="item">
                        <img src="img/portfolio/full/acca/1.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="img/portfolio/full/acca/2.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="img/portfolio/full/acca/3.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="img/portfolio/full/acca/4.jpg" alt="" />
                    </div>
                   
                </div>



                <script type="text/javascript">
                    jQuery(document).ready(function ($) {
                        $('.portfolio-page-carousel').imagesLoaded(function () {
                            $('.portfolio-page-carousel').owlCarousel({
                                smartSpeed: 1200,
                                autoplay: true,
                                autoPlaySpeed: 1000,
                                items: 1,
                                loop: true,
                                dots: true,
                                nav: true,
                                navText: false,
                                margin: 10,
                                autoHeight: true
                            });
                        });
                    });
                </script>
            </div>

            <div class="col-sm-4 col-md-4 portfolio-block">
                <!-- Project Description -->
                <div class="project-description">
                    <div class="block-title">
                        <h3>Description</h3>
                    </div>
                    <ul class="project-general-info">
                        <li>
                            <p><i class="fa fa-user"></i> ACCA Sri Lanka</p>
                        </li>
                        <li>
                            <p><i class="fa fa-globe"></i> <a href="https://www.acca.lk/"
                                    target="_blank">www.acca.lk</a></p>
                        </li>
                    </ul>

                    <p class="text-justify">(A project of Enfection pvt Ltd.)</p>
                    <!-- /Project Description -->

                    <!-- Technology -->
                    <div class="tags-block">
                        <div class="block-title">
                            <h3>Technology</h3>
                        </div>
                        <ul class="tags">
                            <li><a>WordPress</a></li>
                            <li><a>HTML</a></li>
                            <li><a>SCSS</a></li>
                            <li><a>javascript</a></li>
                            <li><a>jQuery</a></li>
                            <li><a>PHP</a></li>
                            <li><a>Bootstrap</a></li>
                            <li><a>Adobe XD</a></li>
                        </ul>
                    </div>
                    <!-- /Technology -->

                    <!-- Share Buttons -->
                    <div class="btn-group share-buttons">
                        <div class="block-title">
                            <h3>Share</h3>
                        </div>
                        <a href="#" target="_blank" class="btn"><i class="fab fa-facebook-f"></i> </a>
                        <a href="#" target="_blank" class="btn"><i class="fab fa-twitter"></i> </a>
                        <a href="#" target="_blank" class="btn"><i class="fab fa-dribbble"></i> </a>
                    </div>
                    <!-- /Share Buttons -->
                </div>
                <!-- Project Description -->
            </div>
        </div>
    </div>
</div>