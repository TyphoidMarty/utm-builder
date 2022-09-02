import { LightningElement } from 'lwc';

export default class LightningUTMComponent extends LightningElement {
    baseLink='';
    utmCampaign='';
    utmSource='';
    utmMedium='';
    fullLink='';

    handleBaseLinkInputChange(event) {
        this.baseLink = event.detail.value;
        this.generateQueryParams();
    }

    handleUTMSourceInputChange(event) {
        this.utmSource = event.detail.value;
        this.generateQueryParams();
    }

    handleUTMCampaignInputChange(event) {
        this.utmCampaign = event.detail.value;
        this.generateQueryParams();
    }

    handleUTMMediumChange(event) {
        this.utmMedium = event.detail.value;
        this.generateQueryParams();
    }

    generateQueryParams(){
      const params = new URLSearchParams({
        utm_source: this.utmSource,
        utm_medium: this.utmMedium,
        utm_campaign: this.utmCampaign,
      });
      this.fullLink = this.baseLink + '?' + params.toString();
    }

    get options() {
        return [
            { label: 'Web', value: 'web' },
            { label: 'Paid', value: 'paid' },
            { label: 'Social', value: 'social' },
            { label: 'Email', value: 'email' },
        ];
    }
}
