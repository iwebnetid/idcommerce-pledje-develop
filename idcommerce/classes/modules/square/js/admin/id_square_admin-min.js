jQuery(document).ready(function(){console.log("Square Admin Loaded"),jQuery.getJSON(idc_global_currencies,function(e,n){jQuery.each(e,function(){jQuery('#id_square_admin_settings select[name="currency"]').append('<option value="'+this.Currency_Code+'">'+this.Country_and_Currency+"</option>")});var r=jQuery('#id_square_admin_settings select[name="currency"]').data("selected");jQuery('#id_square_admin_settings select[name="currency"]').val(r)})});