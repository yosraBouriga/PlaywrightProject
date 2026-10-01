// Cette page contient les locators et les méthodes pour interagir avec la page de création de compte.

import { Page, Locator } from '@playwright/test';

export class CreateAccountPage {

    // La page
    readonly page: Page;

    // Les éléments du formulaire

    readonly emailLabel: Locator;
    // Informations de connexion
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;

    // Informations personnelles
    readonly lastNameInput: Locator;
    readonly firstNameInput: Locator;
    readonly countryField: Locator;
    readonly nationalityField: Locator;
    readonly addAnotherItemButton: Locator;
    readonly secondNationalityField: Locator;
    readonly postalCodeInput: Locator;
    readonly cityInput: Locator;
    readonly phoneInput: Locator;

    // Informations complémentaires
    readonly domaineField: Locator;
    readonly levelField: Locator;

    constructor(page: Page) {

        this.page = page;

        // LOCATORS

        this.emailLabel = page.getByText('My email address');
 
        // Informations de connexion
        this.emailInput = page.getByRole('textbox', {
            name: 'monadresse@domaine.com'
        });
        this.passwordInput = page.locator('#edit-pass-pass1');
        this.confirmPasswordInput = page.locator('#edit-pass-pass2');

        // Informations personnelles
        this.lastNameInput = page.locator('#edit-field-nom-0-value');
        this.firstNameInput = page.locator('#edit-field-prenom-0-value');
        this.countryField = page.getByRole('textbox', { name: 'Pays de résidence*' })
        this.nationalityField = page.locator('#edit-field-nationalite-0-target-id')
        this.secondNationalityField = page.getByRole(
            'textbox',
            { name: 'Pays de nationalité (value 2)' }
        );
        this.addAnotherItemButton =
        page.getByRole('button', { name: 'Add another item' })

        this.postalCodeInput = page.locator('#edit-field-code-postal-0-value');
        this.cityInput = page.locator('#edit-field-ville-0-value');
        this.phoneInput = page.locator('#edit-field-telephone-0-value');
        
        // Informations complémentaires
        this.domaineField = page.getByRole('textbox', { name: 'Domaine d\'études' })
        this.levelField = page.getByRole('textbox', { name: 'Niveau(x) d\'étude' })

        
    }

    // METHODS
    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }
    
    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }
    
    async fillConfirmPassword(password: string) {
        await this.confirmPasswordInput.fill(password);
    }
    async selectCivilite(civilite: string) {
        await this.page
            .getByText(civilite, { exact: true })
            .click();
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }
    async selectCountry(country: string) {
        await this.countryField.click();
        await this.page.getByText(country, { exact: true }).click();
    }

    async selectNationality(nationality: string) {
        await this.nationalityField.fill(nationality);
     }
    
    
    async clickAddAnotherItem() {
        await this.addAnotherItemButton.click();
    }
    
    async fillPostalCode(postalCode: string) {
        await this.postalCodeInput.fill(postalCode);
    }

    async fillCity(city: string) {
        await this.cityInput.fill(city);
    }

    async fillPhone(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async selectProfile(profile: string) {
        await this.page
            .getByRole('group', { name: 'You are :*' })
            .getByText(profile, { exact: true })
            .click();
    }
    async selectDomaine(domaine: string) {
        await this.domaineField.click();
        await this.page.getByText(domaine, { exact: true }).click();
    }

    async selectLevel(level: string) {
        await this.levelField.click();
        await this.page.getByText(level, { exact: true }).click();
    }
  
}