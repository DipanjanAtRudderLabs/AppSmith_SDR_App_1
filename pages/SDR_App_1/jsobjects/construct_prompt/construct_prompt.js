export default {
	constructPrompt () {
		
		var company_name = prospect_info.data[0]["CLEARBIT_COMPANY_NAME_C"]
		var company_num_employees = prospect_info.data[0]["CLEARBIT_COMPANY_METRICS_EMPLOYEES_C"]
		var company_industry = prospect_info.data[0]["CLEARBIT_COMPANY_CATEGORY_INDUSTRY_C"]
		
		var title_list = "";
		var json = page_view_info.data;
		json.forEach(function(obj) { title_list = title_list + obj["TITLE"].replace("|","") + ","; });		
		
		var email_generation_prompt_text = "You are a sales development rep trying to sell RudderStack's customer data platform to " + prospect_info.data[0]["NAME"] + " of company " + 	company_name + ". " + company_name + " is a " + company_num_employees + " people, " + company_industry + " company. The person leading the product evaluation is their " + prospect_info.data[0]["TITLE"] + ". The person is interested in " + title_list + ". Write an email which will get the person excited to get on a call"

		Input2.setValue(email_generation_prompt_text);
	}
}