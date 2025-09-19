from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path("login/", views.login),
    path("logout/", views.logout),

    # Sidebar routes
    path("dashboard/", views.dashboard),
    path("crops/", views.crops),
    path("subscriptions/", views.subscriptions),
    path("teams/", views.teams),
    path("tasks/", views.tasks),
    path("media/", views.media),
    path("tickets/", views.tickets),
    path("knowledge/", views.knowledge),
    path("deployments/", views.deployments),
    path("apis/", views.apis),
    path("logs/", views.logs),
    path("plans/", views.plans),
    path("invoices/", views.invoices),
    path("clients/", views.clients),
    path("reports/", views.reports),
    path("notifications/", views.notifications),
    path("analytics/", views.analytics),
    path("users/", views.users),
    path("settings/", views.settings),
    path("profile/", views.profile),
]
