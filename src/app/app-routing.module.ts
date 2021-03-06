import { DonateComponent } from './donate/donate.component';
import { NewsDetailsComponent } from './news/components/news-details/news-details.component';
import { ViewNewsComponent } from './edit-profile/components/edit-news/components/view-news/view-news.component';
import { ManageUsersComponent } from './edit-profile/components/manage-users/manage-users.component';
import { ManageEmailComponent } from './edit-profile/components/manage-email/manage-email.component';
import { EditGalleryComponent } from './edit-profile/components/edit-gallery/edit-gallery.component';
import { ProfileComponent } from './edit-profile/components/profile/profile.component';
import { EditNewsComponent } from './edit-profile/components/edit-news/edit-news.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { StoriesComponent } from './stories/stories.component';
import { EventsComponent } from './events/events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsafetyrightsComponent } from './animalsafetyrights/animalsafetyrights.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EducationandtrainingComponent } from './educationandtraining/educationandtraining.component';
import { EmergencyreliefsComponent } from './emergencyreliefs/emergencyreliefs.component';
import { FinancialsComponent } from './financials/financials.component';
import { FoodclothsandshelterComponent } from './foodclothsandshelter/foodclothsandshelter.component';
import { ForgivenessandreconciliationComponent } from './forgivenessandreconciliation/forgivenessandreconciliation.component';
import { FreshaircleanwaterComponent } from './freshaircleanwater/freshaircleanwater.component';
import { HealthhygieneandsanitationComponent } from './healthhygieneandsanitation/healthhygieneandsanitation.component';
import { HomeComponent } from './home/home.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { OrganicsoilandgreenviewComponent } from './organicsoilandgreenview/organicsoilandgreenview.component';
import { RehearsalofpanchasilaComponent } from './rehearsalofpanchasila/rehearsalofpanchasila.component';
import { ResearchandinnovationComponent } from './researchandinnovation/researchandinnovation.component';
import { SafetyandprotectionComponent } from './safetyandprotection/safetyandprotection.component';
import { SavechildrenvulnerableandoldComponent } from './savechildrenvulnerableandold/savechildrenvulnerableandold.component';
import { SupportersComponent } from './supporters/supporters.component';
import { TeachingofbuddhaandspiritualityComponent } from './teachingofbuddhaandspirituality/teachingofbuddhaandspirituality.component';
import { EditCalendarComponent } from './edit-profile/components/edit-calendar/edit-calendar.component';
import { EditStoriesComponent } from './edit-profile/components/edit-stories/edit-stories.component';
import { AuthGuardService } from './login/services/auth-guard.service';
import { AlbumComponent } from './edit-profile/components/edit-gallery/components/album/album.component';
import { ViewStoryComponent } from './edit-profile/components/edit-stories/components/view-story/view-story.component';
import { FullStoryDetailsComponent } from './stories/components/full-story-details/full-story-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryAlbumComponent } from './gallery/components/gallery-album/gallery-album.component';
import { DevoteeComponent } from './volunteers/components/devotee/devotee.component';
import { DonoragencyComponent } from './volunteers/components/donoragency/donoragency.component';
import { MonksandnunsComponent } from './volunteers/components/monksandnuns/monksandnuns.component';
import { PartnersComponent } from './volunteers/components/partners/partners.component';
import { SponsorsComponent } from './volunteers/components/sponsors/sponsors.component';
import { WellwishersComponent } from './volunteers/components/wellwishers/wellwishers.component';
import { DonorsComponent } from './volunteers/components/donors/donors.component';
import { PoliciesandstandardComponent } from './policiesandstandard/policiesandstandard.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { FaciltyRentalsComponent } from './facilty-rentals/facilty-rentals.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'about_us/leadership', component: LeadershipComponent },
  { path: 'about_us/supporters', component: SupportersComponent },
  { path: 'about_us/financials', component: FinancialsComponent },
  { path: 'about_us/careers', component: CareersComponent },
  { path: 'contact_us', component: ContactusComponent },
  {
    path: 'services/food_cloths_and_shelter',
    component: FoodclothsandshelterComponent,
  },
  {
    path: 'services/health_hygiene_and_sanitation',
    component: HealthhygieneandsanitationComponent,
  },
  {
    path: 'services/fresh_air_clean_water',
    component: FreshaircleanwaterComponent,
  },
  {
    path: 'services/organic_soil_and_green_view',
    component: OrganicsoilandgreenviewComponent,
  },
  {
    path: 'services/safety_and_protection',
    component: SafetyandprotectionComponent,
  },
  {
    path: 'services/animal_safety_rights',
    component: AnimalsafetyrightsComponent,
  },
  {
    path: 'services/save_children_vulnerable_and_old',
    component: SavechildrenvulnerableandoldComponent,
  },
  { path: 'services/emergency_reliefs', component: EmergencyreliefsComponent },
  {
    path: 'services/education_and_training',
    component: EducationandtrainingComponent,
  },
  {
    path: 'services/teaching_of_buddha_and_spirituality',
    component: TeachingofbuddhaandspiritualityComponent,
  },
  {
    path: 'services/rehearsal_of_panchasila',
    component: RehearsalofpanchasilaComponent,
  },
  {
    path: 'services/forgiveness_and_reconciliation',
    component: ForgivenessandreconciliationComponent,
  },
  {
    path: 'services/research_and_innovation',
    component: ResearchandinnovationComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calendar',
        canActivate: [AuthGuardService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'calendar',
        component: EditCalendarComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'stories',
        canActivate: [AuthGuardService],
        component: EditStoriesComponent,
      },
      {
        path: 'stories/view-story/:id',
        component: ViewStoryComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'news',
        canActivate: [AuthGuardService],
        component: EditNewsComponent
      },
      {
        path: 'news/view-news/:id',
        component: ViewNewsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'gallery',
        canActivate: [AuthGuardService],
        component: EditGalleryComponent,
      },
      {
        path: 'gallery/album/:id',
        canActivate: [AuthGuardService],
        component: AlbumComponent,
      },
      {
        path: 'manage-email',
        canActivate: [AuthGuardService],
        component: ManageEmailComponent,
      },
      {
        path: 'manage-user',
        canActivate: [AuthGuardService],
        component: ManageUsersComponent,
      },
    ],
  },
  { path: 'informations/calendar', component: CalendarComponent },
  { path: 'informations/events', component: EventsComponent },
  {
    path: 'informations/stories',
    component: StoriesComponent,
  },
  {
    path: 'informations/stories/story-details/:id',
    component: FullStoryDetailsComponent,
  },
  {
    path: 'informations/news',
    component: NewsComponent,
  },
  {
    path: 'informations/gallery',
    component: GalleryComponent,
  },
  {
    path: 'informations/gallery/album/:id',
    component: GalleryAlbumComponent,
  },
  {
    path: 'informations/news/news-details/:id',
    component: NewsDetailsComponent,
  },
  { path: 'informations/policiesandstandard', component: PoliciesandstandardComponent },
  { path: 'informations/termandcondition', component: TermandconditionComponent },

  { path: 'informations/videos', component: VideosComponent },
  { path: 'informations/photos', component: PhotosComponent },
  { path: 'informations/facility-rentals', component: FaciltyRentalsComponent },
  { path: 'informations/library',component:LibraryComponent},
  { path: 'donations', component: DonateComponent },
  { path: 'volunteers/devotee', component: DevoteeComponent },
  { path: 'volunteers/donoragency', component: DonoragencyComponent },
  { path: 'volunteers/monksandnuns', component: MonksandnunsComponent },
  { path: 'volunteers/partners', component: PartnersComponent },
  { path: 'volunteers/sponsers', component: SponsorsComponent },
  { path: 'volunteers/wellwishers', component: WellwishersComponent },
  { path: 'volunteers/donors', component: DonorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
