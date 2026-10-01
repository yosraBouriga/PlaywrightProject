import { test, expect } from '@playwright/test';
import { CreateAccountPage } from '../pages/CreateAccountPage';

// Inputs
import studentData from '../data/student.json';
import researcherData from '../data/researcher.json';

const users = [
    studentData,
    researcherData
];

test.describe('Création de compte Campus France', () => {

    for (const user of users) {

        test(`Création de compte - ${user.profile}`, async ({ page }) => {

            const createAccountPage = new CreateAccountPage(page);

            // 1. Ouvrir la page de création de compte
            await page.goto('/en/user/register', {
                waitUntil: 'domcontentloaded'
            });

            // cookies 
            await page
    .getByRole('button', { name: 'OK, accept all' })
    .click();
            // 2. Informations de connexion
            await createAccountPage.fillEmail(user.email);

            await createAccountPage.fillPassword(
                user.password
            );

            await createAccountPage.fillConfirmPassword(
                user.password
            );

            // 3. Informations personnelles
            await createAccountPage.selectCivilite(
                user.civility
            );

            await createAccountPage.fillLastName(
                user.lastname
            );

            await createAccountPage.fillFirstName(
                user.firstname
            );

            await createAccountPage.selectCountry(
                user.country
            );

            await createAccountPage.selectNationality(
                user.nationality
            );

            // 5. Adresse / contact
            await createAccountPage.fillPostalCode(
                user.postalCode
            );

            await createAccountPage.fillCity(
                user.city
            );

            await createAccountPage.fillPhone(
                user.tel
            );

            // 6. Profil : Student ou Researcher
            await createAccountPage.selectProfile(
                user.profile
            );

            // 7. Informations complémentaires
            await createAccountPage.selectDomaine(
                user.domaine
            );

            await createAccountPage.selectLevel(
                user.level
            );

            // 8. Les assertions

            // Vérifier que le label 'My email address' contient le mot address
            await expect(createAccountPage.emailLabel).toContainText('address');
            
            // Vérifier le bouton 'ADD ANOTHER ITEM ' est opérationel
            await expect(createAccountPage.addAnotherItemButton)
            .toBeEnabled();
        
            await createAccountPage.clickAddAnotherItem();
        
            await expect(createAccountPage.secondNationalityField)
            .toBeVisible();
             } )}
});