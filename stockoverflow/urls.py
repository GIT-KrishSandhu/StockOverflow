"""
URL configuration for stockoverflow project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings  
from django.conf.urls.static import static
from stock_accounts import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/', admin.site.urls),
    path('', views.dashboard, name='dashboard'),
    path('accounts/', include("stock_accounts.urls")),
    path('currency/', include("stock_currency.urls")),
    path('market/', include("stock_market.urls")),
    path('portfolio/', include("stock_portfolio.urls")),
    path('risk/', include("stock_risk.urls")),
    path('tax/', include("stock_tax.urls")),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
