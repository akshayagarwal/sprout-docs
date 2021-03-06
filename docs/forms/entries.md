# Entries

An Entry Element is created when a form is submitted. If validation fails, the Entry Element will be returned to the template with errors. If validation succeeds, the Entry Element will be saved to the database and the Form submission will redirect to the Redirect URL.

## Entry Title

The Entry Title can be defined in a Form's **Title Format** setting.

All information contained in the Title will also be searchable. You may use the same syntax here as you would with the Title Format setting in your Sections. For example:

``` twig
{dateCreated|date('Ymd')} {fullName}
```

## Templating
 
You can fetch form Entries using the [same options you have for all Elements](http://buildwithcraft.com/docs/templating/elementcriteriamodel) as described in the Craft documentation.

### entries 

The `entries` tag will let you get all entries for a specific form.

::: code

``` craft3
{# Get all entries for a specific form #}
{% for formEntry in craft.sproutForms.entries
	.formHandle('contact')
	.all() %}
	{{ formEntry.title }}
{% endfor %}

{# Limit the results to the first 3 entries #}
{% for formEntry in craft.sproutForms.entries.formHandle('contact')
  .limit(3)
  .order('elements.dateCreated asc')
  .all() %}
	{{ formEntry.title }}
{% endfor %}

{# Get the oldest Form Entry from the Contact Form #}
{% set formEntry = craft.sproutForms.entries
  .formHandle('contact')
  .inReverse()
  .one() %}

{{ formEntry.title }}

{# Output the total number of Form Entries from the Contact Form #}
{{ craft.sproutForms.entries.formHandle('contact').count() }}

{# Output Entries with a specific status by Status ID or by Status Handle #}
{% for formEntry in craft.sproutForms.entries
  .formHandle('contact')
  .statusId(2)
  .all() %}
  {{ formEntry.title }}
{% endfor %}

{% for formEntry in craft.sproutForms.entries
  .formHandle('contact')
  .statusHandle('pending')
  .all() %}
  {{ formEntry.title }}
{% endfor %}
```

``` craft2
{# Get all entries for a specific form #}
{% for formEntry in craft.sproutForms.entries.formHandle('contact') %}
	{{ formEntry.title }}
{% endfor %}

{# Limit the results to the first 3 entries #}
{% for formEntry in craft.sproutForms.entries.formHandle('contact').limit(3).order('dateCreated asc') %}
	{{ formEntry.title }}
{% endfor %}

{# Get the latest Form Entry from the Contact Form #}
{% set formEntry = craft.sproutForms.entries.formHandle('contact').last() %}

{{ formEntry.title }}

{# Output the total number of Form Entries from the Contact Form #}
{{ craft.sproutForms.entries.formHandle('contact').total() }}

{# Output Entries with a specific status by Status ID or by Status Handle #}
{% for formEntry in craft.sproutForms.entries.formHandle('contact').statusId(2) %}
  {{ formEntry.title }}
{% endfor %}

{% for formEntry in craft.sproutForms.entries.formHandle('contact').statusHandle('pending') %}
  {{ formEntry.title }}
{% endfor %}
```

:::

### lastEntry

When a form has been submitted successfully, the user will be redirected to wherever the Redirect URL setting points to. To display content from the submitted form after the form has been submitted, you can use the `lastEntry()` tag.

``` twig
{# Check for the last entry submitted #}
{% set lastEntry = craft.sproutForms.lastEntry() %}

{% if lastEntry %}
	
	{# If the last entry exists, we can output any of the variables
	   that were present in the form submission. #}
	<p>Thanks <strong>{{ lastEntry.fullName }}</strong>! We'll be in touch soon! Did you know you can display any of the values that were submitted in the form?  Here's a list of all the values in the last form submission:</p>
	
	<p>
		Full Name: <em>{{ lastEntry.fullName }}</em><br/>
		Email: <em>{{ lastEntry.email }}</em><br/>
		Message: <em>{{ lastEntry.message }}</em><br/>
	</p>

{% endif %}
```

### getEntry

The `getEntry` tag retrieves the Entry Element of the active submission. If an active Form Entry doesn't exist, it returns an empty Entry Element.

The `getEntry` method is useful if you need to setup your template to manage your Form submission values and errors but you don't know the handle of your Form.  This scenario can arise when you are using the Sprout Forms Relations field to dynamically output a form in your template.

``` twig
{% set submittedEntry = craft.sproutForms.getEntry(form) %}

{% if submittedEntry.getErrors()|length %}

  {# Display All Errors at the top of your page (assumes you have an errorList macro) #}
  {% for errors in submittedEntry.getErrors() %}
    {{ errorList(errors) }}
  {% endfor %}

{% endif %}
```

## Entry Relations Field

Sprout Forms adds an Entry Relations Field to Craft CMS:
 
- **Entry (Sprout Forms)**