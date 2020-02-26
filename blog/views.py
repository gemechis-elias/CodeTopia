# Built in modules

# Django related modules
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import (
    render, 
    HttpResponseRedirect,
    HttpResponsePermanentRedirect,
    resolve_url
)
from django.http import HttpResponseGone
from django.urls import (
    reverse,
    reverse_lazy
)

from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required, user_passes_test

from django.utils import timezone

from django.utils.decorators import method_decorator
from django.views.decorators.debug import sensitive_post_parameters
from django.views.decorators.csrf import csrf_protect

from django.utils.translation import gettext, gettext_lazy as _
from django.utils.http import (
    url_has_allowed_host_and_scheme, urlsafe_base64_decode,
)

from django.views.decorators.cache import never_cache

from django.views.generic.base import View
from django.views.generic.edit import FormView

from django.contrib import messages

# Project modules
from .forms import BlogCreatioForm

# Third party modules
import markdown2

# markdown2.markdown("*boo!*", extras=["footnotes"])


__all__ = [
    "Blog",
    "CreateBlog"
]

class Blog(View):
    """Class for creating user with no priviledges"""

    template_name = "blog/index.html"

    title = _('CodeTopia | Blog')
    extra_context = None

    def get_context_data(self, *args, **kwargs):
        """Return all context data by collecting it."""
        current_site = get_current_site(self.request)
        context = {
            "site": current_site,
            "site_name": current_site.name,
            "title": self.title
        }
        context.update(**(self.extra_context or {}))
        return context

    def get(self, request, *args, **kwargs):
        self.extra_context = {

        }
        return render(request=self.request, template_name=self.template_name, context=self.get_context_data())


class CreateBlog(View):
    """Class for creating user with no priviledges"""
    template_name = "blog/create_blog.html"
    form_class = BlogCreatioForm

    title = _('CodeTopia | Create Blog')
    extra_context = None

    # Error messages for the view
    error_messages = {
    }
    # Success messages for the view
    success_messages = {
        "create_succesfully": _("Congradulation you have created  your blog succesfully.")
    }

    def get_form_class(self, *args, **kwargs):
        """Return the instance of the for class to be used."""
        return self.form_class(*args)

    def get_context_data(self, *args, **kwargs):
        """Return all context data by collecting it."""
        current_site = get_current_site(self.request)
        context = {
            "site": current_site,
            "site_name": current_site.name,
            "title": self.title
        }
        context.update(**(self.extra_context or {}))
        return context

    def get(self, request, *args, **kwargs):
        self.extra_context = {
            "form": self.get_form_class(initial = {
                'author': request.user
            })
        }
        return render(request=self.request, template_name=self.template_name, context=self.get_context_data())


    @method_decorator(sensitive_post_parameters())
    @method_decorator(csrf_protect)
    def post(self, *args, **kwargs):
        form = self.get_form_class(self.request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request=self.request, 
                message=self.success_messages.get("create_succesfully")
            )

            return HttpResponseRedirect(reverse(viewname="blog:blog_homepage"))

        # If the form is invalid return the form with error messages
        self.extra_context = {
            **self.get_context_data(),
            "form": form
        }
        return render(request=self.request, template_name=self.template_name, context=self.get_context_data())